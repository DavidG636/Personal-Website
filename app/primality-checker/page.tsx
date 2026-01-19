import styles from "./PrimalityChecker.styles";
import PrimalityCheckerClient from "../../components/PrimalityCheckerClient";

export default function PrimalityCheckerPage() {
  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>Primality Checker</h1>
      <PrimalityCheckerClient />
    </div>
  );
}
