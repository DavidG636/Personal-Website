"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./NavbarParagraphUtilities.module.css";

export default function NavbarParagraphUtilities() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.mainNav}`}
    >
      <Link
        href="/ParagraphUtilities"
        className={`navbar-brand ${styles.profileName}`}
      >
        Paragraph Utilities
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarNavDropdown"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/ParagraphUtilities/ParagraphInfo"
              onClick={() => setIsOpen(false)}
            >
              Paragraph Info
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/ParagraphUtilities/Case"
              onClick={() => setIsOpen(false)}
            >
              Case
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
