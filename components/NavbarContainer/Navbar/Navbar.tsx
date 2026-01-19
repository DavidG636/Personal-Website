"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.mainNav}`}
    >
      <Link href="/" className={`navbar-brand ${styles.profileName}`}>
        David Gonzalez
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
              href="/who-am-i"
              onClick={() => setIsOpen(false)}
            >
              Who Am I
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              href="/projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
