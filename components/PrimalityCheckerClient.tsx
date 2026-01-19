"use client";
import React, { useState } from "react";
import styles from "../app/primality-checker/PrimalityChecker.styles";

function isPrime(n: number) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

export default function PrimalityCheckerClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const check = () => {
    const n = parseInt(input.replace(/[^0-9\-]/g, ""), 10);
    if (Number.isNaN(n)) {
      setResult("Please enter a valid integer");
      return;
    }

    setResult(null);
    setProgress(0);

    // Simulate progress while computing
    let p = 0;
    const step = 5;
    const t = setInterval(() => {
      p += step;
      if (p >= 90) p = 90; // leave final 10% for finalizing
      setProgress(p);
    }, 60);

    // Do the compute (synchronously)
    setTimeout(() => {
      const prime = isPrime(Math.abs(n));
      clearInterval(t);
      setProgress(100);
      setResult(prime ? `${n} is prime` : `${n} is not prime`);
    }, 400 + Math.min(2000, Math.abs(n) % 2000));
  };

  return (
    <div style={styles.primalityCheckerDiv}>
      <div style={styles.primalityCheckerRow}>
        <input
          style={styles.textInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an integer"
        />
        <button style={styles.submit} onClick={check}>
          Check Primality!
        </button>
      </div>

      <div style={styles.output}>
        <h2 style={styles.primeOrNot}>{result ?? ""}</h2>
        <div id="primalityChecker-myProgress" style={styles.myProgress}>
          <div
            id="primalityChecker-myBar"
            style={{ ...styles.myBar, width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
}
