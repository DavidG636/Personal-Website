"use client";

import IMAGES from "@/lib/images";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`container-fluid text-center ${styles.bg4}`}>
      <div className={styles.links}>
        <a className={styles.linkInherit} href="/contact">
          <i className={`${styles.contactLink} far fa-envelope`}></i>
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/david-gonzalez-856093171"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={IMAGES.logos.linkedIn}
            width={16}
            height={16}
            className={styles.linkedInPic}
            alt="Linked In Logo"
          />
        </a>
        <span>|</span>
        <a href="https://github.com/DavidG636" target="_blank" rel="noreferrer">
          <Image
            src={IMAGES.logos.github}
            className={styles.gitPhotoLink}
            alt="GitHub"
            width={20}
            height={20}
          />
        </a>
        <span>|</span>
        <a
          href="https://davidg1739.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={IMAGES.logos.otherAccount}
            title="Other Account"
            className={styles.otherAccountProfilePic}
            alt="Other Account Profile Picture"
            width={20}
            height={20}
          />
        </a>
      </div>

      <p className={`${styles.copyrightStatment} copyrightStatment`}>
        <strong>© Website Created and Designed By David Gonzalez</strong>
      </p>
    </footer>
  );
}
