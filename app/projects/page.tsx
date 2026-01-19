import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const projectData = [
  {
    title: "Paragraph Utilities",
    description:
      "This website allows for users to find out information about their writing such as number of punctuation marks, sentences, and prepositions.",
    thumb: "/images/paragraphUtilitiesThumb.PNG",
    href: "/ParagraphUtilities",
    type: "web",
    projectKey: "Paragraph-Utilities",
  },
  {
    title: "Leap Year",
    description:
      "This website tells the user if the year that we are currently in is a leap year or not.",
    thumb: "/images/leapYearThumb.PNG",
    href: "https://davidg636.github.io/leapYear/",
    type: "web",
    projectKey: "leapYear",
  },
  {
    title: "Hello Name",
    description:
      "Input your name into this program and watch it say hello to you!",
    thumb: "/images/helloNameThumb.PNG",
    href: "https://github.com/DavidG636/helloName/blob/master/helloName.c",
    type: "file",
    projectKey: "helloName",
    invert: true,
  },
  {
    title: "Pace Seidenberg Stem Camp 2017 Project",
    description: "Visualization of data from the Billion Oyster Project.",
    thumb: "/images/paceSeidenbergStemCamp2017Thumb.PNG",
    href: "https://github.com/DavidG636/Pace-Seidenberg-Stem-Camp-2017/blob/master/script.py",
    type: "file",
    projectKey: "Pace-Seidenberg-Stem-Camp-2017",
  },
  {
    title: "Primality Checker",
    description:
      "This website allows for users to input a number and check if it's a prime number or not.",
    thumb: "/images/primalityCheckerThumb.PNG",
    href: "/primality-checker",
    type: "web",
    projectKey: "Primality-Checker",
  },
  {
    title: "Today I Will",
    description:
      "This website allows for people who tend to procrastinate to write down a goal or task that they plan on completing by the end of the day.",
    thumb: "/images/todayIWillThumb.PNG",
    href: "https://davidg636.github.io/Today-I-Will/",
    type: "web",
    projectKey: "Today-I-Will",
  },
  {
    title: "Project Automation",
    description: "Automation of my workflow for creating a new project.",
    thumb: "/images/projectAutomationThumb.png",
    href: "https://github.com/DavidG636/Project-Automation/blob/master/createProject.bat",
    type: "file",
    projectKey: "Project-Automation",
    invert: true,
  },
  {
    title: "Computer-Mode",
    description:
      "Batch program that can help speed up tedious processes on a computer.",
    thumb: "/images/computerModeThumb.png",
    href: "https://github.com/DavidG636/Computer-Mode/blob/master/loadPreset.bat",
    type: "file",
    projectKey: "Computer-Mode",
    invert: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className={`container-fluid text-center ${styles.bg3}`}>
      <h3 className="margin">Projects</h3>

      <div
        className="row"
        style={{ justifyContent: "space-evenly", rowGap: "40px" }}
      >
        {projectData.map((project, index) => {
          const isExternal = project.href.startsWith("http");
          const LinkComponent = isExternal ? "a" : Link;
          const linkProps = isExternal
            ? { href: project.href, target: "_blank", rel: "noreferrer" }
            : { href: project.href };
          return (
            <div key={index}>
              <div className={styles.projectWrapper}>
                <div className={styles.hoverEffect}>
                  <Image
                    src={project.thumb}
                    alt={project.title}
                    width={300}
                    height={300}
                    className={`img-responsive over ${styles.thumb}`}
                  />

                  <div className={`${styles.overlay}`}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    <div className={styles.tooltip}>
                      <a
                        target="_blank"
                        href={`https://github.com/DavidG636/${project.projectKey}`}
                      >
                        <Image
                          src="/images/moreInfo.png"
                          alt="More Info"
                          width={30}
                          height={30}
                          className={styles.moreInfoPic}
                          style={
                            project.invert
                              ? { filter: "brightness(0) invert(1)" }
                              : {}
                          }
                        />
                      </a>
                      <span className={styles.tooltipText}>
                        Click for more info!
                      </span>
                    </div>
                    <div className={styles.tooltip}>
                      <LinkComponent {...linkProps}>
                        <Image
                          src={
                            project.type === "web"
                              ? "/images/web.png"
                              : "/images/file.png"
                          }
                          alt="Action Icon"
                          width={30}
                          height={30}
                          className={styles.webPic}
                        />
                      </LinkComponent>
                      <span className={styles.tooltipText}>
                        {project.type === "web"
                          ? "Click to go to the website!"
                          : "Click to see the file!"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
