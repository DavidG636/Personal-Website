import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import Filter from "bad-words";

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const filter = new Filter();

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
    await push(ref(db, "/"), data);
    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "server_error" }, { status: 500 });
  }
}
