"use client";
import React, { useState } from "react";
import styles from "./Contact.styles";

type FormState =
  | "idle"
  | "submitting"
  | "success"
  | "profanity"
  | "blacklisted"
  | "empty"
  | "error";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const body = await res.json();
      if (res.ok && body.success) {
        setState("success");
      } else if (body.error === "profanity") {
        setState("profanity");
      } else if (body.error === "blacklistedEmail") {
        setState("blacklisted");
      } else if (body.error === "empty") {
        setState("empty");
      } else {
        setState("error");
      }
    } catch (err) {
      console.error(err);
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div style={styles.submitted}>
        <h2>Form Submitted</h2>
        <p>You will hear back in 3-4 business days.</p>
      </div>
    );
  }

  if (state === "profanity") {
    return (
      <div style={styles.errorBox}>
        <h2>Form Not Submitted</h2>
        <p>
          Profanity was found in one of the form responses. Please remove
          profanity and try again.
        </p>
      </div>
    );
  }

  if (state === "blacklisted") {
    return (
      <div style={styles.errorBox}>
        <h2>Form Not Submitted</h2>
        <p>The email address is blacklisted. Try another address.</p>
      </div>
    );
  }

  if (state === "empty") {
    return (
      <div style={styles.errorBox}>
        <h2>Form Not Submitted</h2>
        <p>
          One of your inputs did not have valid text. Please enter valid text.
        </p>
      </div>
    );
  }

  return (
    <form style={styles.contactForm} onSubmit={submit}>
      <div style={styles.row}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={styles.row}>
        <input
          placeholder="Subject"
          value={subject}
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
          style={styles.subject}
          required
        />
      </div>
      <div style={styles.row}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.contactMsg}
          required
        />
      </div>
      <div style={styles.row}>
        <button type="submit" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
