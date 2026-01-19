"use client";
import React, { useEffect, useState } from "react";

type Props = {
  words: string[];
  wait?: number;
};

export default function TypewriterClient({ words, wait = 2000 }: Props) {
  const [txt, setTxt] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    const fullTxt = words[wordIndex % words.length];

    if (isDeleting) {
      timeout = window.setTimeout(() => {
        setTxt(fullTxt.substring(0, txt.length - 1));
      }, 50);
    } else {
      timeout = window.setTimeout(() => {
        setTxt(fullTxt.substring(0, txt.length + 1));
      }, 100);
    }

    if (!isDeleting && txt === fullTxt) {
      timeout = window.setTimeout(() => setIsDeleting(true), wait);
    } else if (isDeleting && txt === "") {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => window.clearTimeout(timeout);
  }, [txt, isDeleting, wordIndex, words, wait]);

  return (
    <span className="typewriter">
      <span className="txt">{txt}</span>
    </span>
  );
}
