import Image from "next/image";
import styles from "./page.module.css";

export default function PacePage() {
  return (
    <div className={styles.bg2}>
      <div className="container-fluid text-center">
        <h5 className={styles.paceHeader}>Pace University</h5>
        <a href="https://www.pace.edu/" target="_blank">
          <Image
            className={`img-responsive ${styles.pacePhoto}`}
            src="/images/pace.png"
            alt="PACE"
            width={300}
            height={300}
          />
        </a>
      </div>

      <div id="accordion">
        <div className={styles.card}>
          <div className={styles.cardHeader} id="headingOne">
            <h5 className="mb-0">
              <button
                className={`btn btn-link ${styles.collapsed}`}
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Awards
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <p>Recieved The Presidential Scholarship</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader} id="headingTwo">
            <h5 className="mb-0">
              <button
                className={`btn btn-link ${styles.collapsed}`}
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Clubs
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              <p>
                Have been a member of Sabor Latino in my first semester of
                college.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader} id="headingThree">
            <h5 className="mb-0">
              <button
                className={`btn btn-link ${styles.collapsed}`}
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Classes
              </button>
            </h5>
          </div>

          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              <span>Fall 2019:</span>
              <ul className="class-schedule">
                <li>Mathematical Structures for Computer Science (CS 113)</li>
                <li>Computer Programming I (CS 121)</li>
                <li>Principles of Economics: Microeconomics (ECO 106)</li>
                <li>Composition (ENG 110)</li>
                <li>
                  First-Year Seminar: Introduction to University Community (UNV
                  101)
                </li>
                <li>Gender, Race and Class (WS 166)</li>
              </ul>
              <hr />
              <span>Spring 2020:</span>
              <ul className="class-schedule">
                <li>Web Design for Non-Profit Organizations (CIS 102W)</li>
                <li>Computer Programming II (CS 122)</li>
                <li>Critical Writing (ENG 120)</li>
                <li>Precalculus (MAT 130)</li>
              </ul>
              <hr />
              <span>Fall 2020:</span>
              <ul className="class-schedule">
                <li>Latino Families in Cross-Cultural Perspective (ANT 214)</li>
                <li>Public Speaking (COM 200)</li>
                <li>Fundamentals of UNIX and C Programming (CS 271)</li>
                <li>Calculus I (MAT 131)</li>
                <li>{"Intro to Women's & Gender Studies (WS 115)"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
