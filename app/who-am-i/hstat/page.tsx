import Image from "next/image";
import styles from "./page.module.css";

export default function HStatPage() {
  return (
    <div className={styles.bg2}>
      <div className="container-fluid text-center">
        <h5 className={styles.hstatHeader}>
          High School of Telecommunication Arts and Technology (HSTAT)
        </h5>
        <a href="http://www.hstat.org" target="_blank">
          <Image
            className={`img-responsive ${styles.hstatPhoto}`}
            src="/images/yellowjacket.PNG"
            alt="HSTAT"
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
                Acting
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
              <p>
                Cast As The Cowardly Lion As Well As Other Small Characters In
                The Wizard Of Oz
              </p>
              <p>
                Cast As Miles As Well As Some Monsters In She Kills Monsters
              </p>
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
                Academic Achievements
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
                Entered The National Honors Society in Junior Year Of High
                School
              </p>
              <p>
                Entered The National Honors Society in Senior Year Of High
                School
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
                Clubs
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
              <p>
                Have Been A Member Of The Intersection Club In my Junior And
                Senior Year
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
