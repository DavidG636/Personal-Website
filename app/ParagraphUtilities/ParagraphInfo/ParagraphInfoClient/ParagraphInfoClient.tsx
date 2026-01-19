"use client";
import React, { useMemo, useState } from "react";
import styles from "./ParagraphInfoClient.module.css";
import Image from "next/image";
import {
  countWords,
  countPunctuationMarks,
  countSentences,
  countPrepositions,
} from "./helpers";

export default function ParagraphInfoClient() {
  const [text, setText] = useState("");

  const {
    characterCountWithWhitespace,
    characterCountWithoutWhitespace,
    wordCount,
    punctuationCount,
    sentenceCount,
    prepositionCount,
  } = useMemo(() => {
    return {
      wordCount: countWords(text),
      punctuationCount: countPunctuationMarks(text),
      sentenceCount: countSentences(text),
      prepositionCount: countPrepositions(text),
      characterCountWithWhitespace: text.length,
      characterCountWithoutWhitespace: text.replace(/\s+/g, "").length,
    };
  }, [text]);

  return (
    <div className="mx-auto w-75 text-center">
      <div className={`${styles.topSection} container`}>
        <textarea
          id="paragraphInput"
          placeholder="Paste Your Text."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <div className={styles.utilButtons}>
          <button
            className={`btn btn-default btn-sm ${styles.utilButton} ${styles.eraseBtn}`}
            onClick={() => setText("")}
          >
            <Image
              className={styles.eraserImage}
              width={82}
              height={82}
              src="/images/Eraser.png"
              alt="Erase"
            />
          </button>
          <button
            className={`btn btn-default btn-sm ${styles.utilButton} ${styles.printBtn}`}
            onClick={() => {
              window.print();
            }}
          >
            <Image
              width={82}
              height={82}
              src="/images/printerPic.png"
              alt="Print"
            />
          </button>
        </div>
        <h2 className={styles.numberOfSentences}>
          Number Of Sentences: <span>{sentenceCount}</span>
        </h2>
      </div>

      <div className={`container ${styles.bottomSection}`}>
        <div className="row">
          <div className={`col-md-6 col-xs-6 ${styles.lgCol}`}>
            <p>
              Word Count: <span>{wordCount}</span>
            </p>
          </div>
          <div className={`col-md-6 col-xs-6 ${styles.wgCol}`}>
            <p>
              Character Count With Whitespace:{" "}
              <span>{characterCountWithWhitespace}</span>
            </p>
          </div>
        </div>

        <div className="row">
          <div className={`col-md-6 col-xs-6 ${styles.lgCol}`}>
            <p>
              Punctuation Marks: <span>{punctuationCount}</span>
            </p>
          </div>
          <div className={`col-md-6 col-xs-6 ${styles.wgCol}`}>
            <p>
              Character Count Without Whitespace:{" "}
              <span>{characterCountWithoutWhitespace}</span>
            </p>
          </div>
        </div>

        <div className="row">
          <div className={`col-xs-12 col-sm-12 col-md-12 ${styles.prepCol}`}>
            <p>
              Number of Prepositions: <span>{prepositionCount}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
