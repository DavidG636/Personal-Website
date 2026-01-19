import Image from "next/image";
import IMAGES from "../../lib/images";
import styles from "./page.module.css";
import Link from "next/link";

export default function ParagraphUtilitiesPage() {
  return (
    <div className={`container-fluid text-center ${styles.container}`}>
      <h1 className={styles.pageHeader}>Paragraph Utilities</h1>
      <p className={styles.pageDescription}>
        Have you ever needed to inspect or transform text? Use the tools below.
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <Link
            href="/ParagraphUtilities/ParagraphInfo"
            className={styles.pageSectionTitleLink}
          >
            <Image
              src={IMAGES.utilities.paragraphInfoGif}
              alt="Paragraph Info"
              width={480}
              height={270}
              className={styles.pageGif}
            />
            <h3 className={styles.pageSectionTitle}>Paragraph Info</h3>
          </Link>
        </div>
        <div className="col-md-6">
          <Link
            href="/ParagraphUtilities/Case"
            className={styles.pageSectionTitleLink}
          >
            <Image
              src={IMAGES.utilities.caseGif}
              alt="Case Converter"
              width={480}
              height={270}
              className={styles.pageGif}
            />
            <h3 className={styles.pageSectionTitle}>Case Converter</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
