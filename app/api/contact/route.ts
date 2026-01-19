import * as admin from "firebase-admin";
import Filter from "bad-words";

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

let db: admin.database.Database | null = null;
const filter = new Filter();

function getDb() {
  if (db) {
    return db;
  }

  // Initialize Firebase Admin SDK on first use
  if (!admin.apps.length) {
    admin.initializeApp({
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      }),
    });
  }

  db = admin.database();
  return db;
}

export async function POST(request: Request) {
  try {
    const data: ContactData = await request.json();
    const blacklistedEmails = (process.env.REJECTED_EMAILS || "")
      .split(",")
      .map((email) => email.trim());
    const letterRegExp = /[a-zA-Z]/g;

    // Validation checks
    let profanityFound = false;
    let blacklistedEmailFound = false;
    let emptyInput = false;

    if (blacklistedEmails.includes(data.email)) {
      blacklistedEmailFound = true;
    }

    Object.values(data).forEach((value: string) => {
      if (filter.isProfane(value)) {
        profanityFound = true;
      }
      if (!letterRegExp.test(value)) {
        emptyInput = true;
      }
    });

    if (profanityFound) {
      return Response.json({ error: "profanity" }, { status: 400 });
    }
    if (emptyInput) {
      return Response.json({ error: "empty" }, { status: 400 });
    }
    if (blacklistedEmailFound) {
      return Response.json({ error: "blacklistedEmail" }, { status: 400 });
    }
    const database = getDb();
    await database.ref("/").push(data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "server_error" }, { status: 500 });
  }
}
