import Link from "next/link";
import TypewriterClient from "../../components/TypewriterClient";
import IMAGES from "../../lib/images";
import styles from "./page.module.css";
import Image from "next/image";

export default function WhoAmI() {
  return (
    <div className={`container-fluid text-center ${styles.bg2}`}>
      <h1 className={styles.iAm}>
        I Am{" "}
        <TypewriterClient
          words={["A Developer!", "A Creator!", "An Entrepreneur!"]}
        />
      </h1>

      <h4 className="text-center">Education</h4>
      <div className="row">
        <div className="col-lg-6 col-md-12 text-center">
          <h6 className={styles.hstatHeader}>
            High School of Telecommunication Arts & Technology (HSTAT)
          </h6>
          <Link href="/who-am-i/hstat">
            <Image
              src={IMAGES.schools.hstat}
              className={styles.hstatPhoto}
              alt="HSTAT"
              width={300}
              height={300}
            />
          </Link>
        </div>

        <div className="col-lg-6 col-md-12 text-center">
          <h6 className={styles.paceHeader}>Pace University (Pace)</h6>
          <Link href="/who-am-i/pace">
            <Image
              src={IMAGES.schools.pace}
              className={styles.pacePhoto}
              alt="Pace"
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
