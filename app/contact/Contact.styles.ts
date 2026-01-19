import type { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  container: {
    backgroundColor: "#485461",
    backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)",
    color: "white",
    width: "100%",
    height: "100%",
  },
  heading: {
    marginBottom: "45px",
  },
  formDiv: {
    width: "100%",
    height: "90%",
    color: "black",
  },
  formInnerDiv: {
    transform: "translateX(50%)",
    marginTop: "15px",
    width: "50%",
    height: "100%",
    border: "1px solid black",
    backgroundColor: "#fffafa",
  },
  submissionDiv: {
    transform: "translateX(50%)",
    marginTop: "15px",
    width: "50%",
    height: "100%",
    border: "1px solid black",
    backgroundColor: "#fffafa",
  },
  profanityDiv: {
    transform: "translateX(50%)",
    marginTop: "15px",
    width: "50%",
    height: "100%",
    border: "1px solid black",
    backgroundColor: "#fffafa",
  },
  emptyDiv: {
    transform: "translateX(50%)",
    marginTop: "15px",
    width: "50%",
    height: "100%",
    border: "1px solid black",
    backgroundColor: "#fffafa",
  },
  blacklistedDiv: {
    transform: "translateX(50%)",
    marginTop: "15px",
    width: "50%",
    height: "100%",
    border: "1px solid black",
    backgroundColor: "#fffafa",
  },
  formRows: {
    position: "absolute",
    width: "100%",
    top: "27%",
  },
  contactMsg: {
    height: "100%",
    width: "470px",
  },
  contactSubmit: {
    marginLeft: "25.5%",
    width: "calc(100% - 43.5%)",
    backgroundColor: "#eddcd2",
    fontWeight: "bold",
  },
  successIcon: {
    fontSize: "72pt",
    marginTop: "100px",
  },
  errorIcon: {
    fontSize: "72pt",
    marginTop: "100px",
  },
  submitted: {
    padding: "2rem",
    textAlign: "center",
  },
  errorBox: {
    padding: "1.5rem",
    border: "1px solid #e74c3c",
    margin: "1rem",
    backgroundColor: "#fff0f0",
    color: "black",
  },
  contactForm: {
    display: "block",
    width: "100%",
    padding: "1rem",
  },
  row: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    justifyContent: "center",
  },
  subject: {
    width: "470px",
  },
};

export default styles;
