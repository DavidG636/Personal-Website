import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`container-fluid text-center ${styles.container}`}>
      My name is David Gonzalez and this is my personal website. My knowledge of
      programming has been acquired through software engineering classes I took
      in highschool as well as self-teaching. I am skilled in Python, HTML, CSS,
      and JavaScript. I am currently learning other languages and attending Pace
      University to further my knowledge in programming.
    </div>
  );
}
