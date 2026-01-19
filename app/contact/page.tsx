import styles from "./Contact.styles";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center", paddingTop: "15px" }}>Contact Me</h1>
      <ContactClient />
    </div>
  );
}
