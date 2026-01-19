import CaseClient from "../../../components/CaseClient";
import styles from "./Case.styles";

export default function CasePage() {
  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Case Converter</h1>
      <CaseClient />
    </div>
  );
}
