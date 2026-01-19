import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffb3",
  },
  heading: {
    paddingTop: "25px",
    textAlign: "center",
  },
  container: {
    width: "100vw",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textInput: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "350px",
  },
  submit: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "350px",
  },
  output: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "350px",
  },
  row: {
    marginTop: "100px",
  },
  progressBar: {
    width: "100%",
    backgroundColor: "#ddd",
  },
  progress: {
    width: "0%",
    height: "30px",
    backgroundColor: "#4caf50",
    textAlign: "center",
    lineHeight: "30px",
    color: "white",
    transition: "width 0.1s linear",
  },
  primeOrNot: {
    textAlign: "center",
  },
  // Aliases for component class names
  primalityCheckerDiv: {
    width: "100%",
  },
  primalityCheckerRow: {
    marginTop: "100px",
  },
  myProgress: {
    width: "100%",
    backgroundColor: "#ddd",
  },
  myBar: {
    width: "0%",
    height: "30px",
    backgroundColor: "#4caf50",
    textAlign: "center",
    lineHeight: "30px",
    color: "white",
    transition: "width 0.1s linear",
  },
};

export default styles;
