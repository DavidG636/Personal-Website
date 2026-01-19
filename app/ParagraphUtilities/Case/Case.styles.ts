import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "lightblue",
    backgroundRepeat: "round",
    backgroundSize: "cover",
  },
  caseContainer: {
    width: "100%",
    padding: "1rem",
  },
  heading: {
    margin: "auto",
    textAlign: "center",
  },
  content: {
    transform: "translateY(50%)",
  },
  contentInner: {
    width: "50%",
    margin: "auto",
    textAlign: "center",
  },
  textarea: {
    display: "block",
    width: "100%",
    margin: "auto 0",
    resize: "none",
    minHeight: "200px",
  },
  buttonRow: {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "center",
    marginTop: "1rem",
  },
  submitButton: {
    display: "block",
    backgroundColor: "#e7e7e7",
    borderColor: "#5c616d",
    width: "60%",
    margin: "10px auto",
  },
  switchContainer: {
    position: "relative",
    display: "inline-block",
    width: "90px",
    height: "34px",
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ca2222",
    transition: "0.4s",
    borderRadius: "14px",
  },
  switchInputChecked: {
    backgroundColor: "#2ab934",
  },
};

export default styles;
