"use client";
import React, { useState } from "react";
import styles from "../app/ParagraphUtilities/Case/Case.styles";

function toTitleCase(text: string) {
  return text
    .toLowerCase()
    .split(" ")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

export default function CaseClient() {
  const [text, setText] = useState("");

  return (
    <div style={styles.caseContainer}>
      <textarea
        style={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        placeholder="Paste text here"
      />

      <div style={styles.buttonRow}>
        <button onClick={() => setText(text.toUpperCase())}>Uppercase</button>
        <button onClick={() => setText(text.toLowerCase())}>Lowercase</button>
        <button onClick={() => setText(toTitleCase(text))}>Title Case</button>
        <button
          onClick={() =>
            setText(
              text
                .toLowerCase()
                .replace(/(^|\.|\?|!)\s+([a-z])/g, (m) => m.toUpperCase())
            )
          }
        >
          Sentence Case
        </button>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(text);
          }}
        >
          Copy
        </button>
        <button onClick={() => setText("")}>Clear</button>
      </div>
    </div>
  );
}
