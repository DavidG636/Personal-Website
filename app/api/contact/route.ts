import Filter from "bad-words";

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

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

    // Use Firebase REST API to write to database
    const databaseUrl = process.env.FIREBASE_DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("FIREBASE_DATABASE_URL not configured");
    }

    const response = await fetch(`${databaseUrl}/.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Firebase API error: ${response.statusText}`);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "server_error" }, { status: 500 });
  }
}
