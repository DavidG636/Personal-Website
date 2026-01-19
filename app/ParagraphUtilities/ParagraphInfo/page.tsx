import ParagraphInfoClient from "./ParagraphInfoClient/ParagraphInfoClient";
import styles from "./page.module.css";

export default function ParagraphInfoPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageHeader}>Paragraph Info</h1>
      <div className="col">
        <ParagraphInfoClient />
      </div>
    </div>
  );
}
