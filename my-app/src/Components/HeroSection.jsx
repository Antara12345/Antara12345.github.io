import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styles from "./Styles/HeroSection.module.css"

import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
// import Resume from "../Components/Resume/Antara_Burman_Resume.pdf"
import { RiDownloadLine } from "react-icons/ri"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles({
  contactBtn: {
    color: "black",

    backgroundColor: "rgb(208,135,104)",
    width: "130px",
    height: "45px",

    "&:hover": {
      backgroundColor: "rgb(221, 128, 23)",
    },
  },
  linkedInIcon: {
    fontSize: "40px",

    color: "rgb(8, 111, 143)",
    "&:hover": {
      backgroundColor: "rgb(17, 155, 197)",
    },
  },
  gitIcon: {
    fontSize: "35px",
    color: "rgb(42, 42, 42)",

    "&:hover": {
      backgroundColor: "rgb(100, 100, 100)",
    },
  },
  a: {
    textDecoration: "none",
  },
})
export function HeroSection() {
  const classes = useStyles()
  return (
    <div className={styles.rootCont} id="hero">
      <Fade>
        <div className={styles.nameCont}>
          <p>Hi,</p>
          <p>
            I am <span>Antara</span>{" "}
          </p>
          <p>Full Stack Web Developer</p>
          <a
            // href="https://drive.google.com/file/d/170izJbEYLqKYgCa120DX79MvFFEBUwya/view?usp=sharing"
            // target="_blank"
            download
            href={"Antara_Burman_fw18_0224.pdf"}
            // rel="noopener noreferrer"
          >
            <Button variant="contained" className={classes.contactBtn}>
              <RiDownloadLine
                style={{
                  fontSize: "18px",
                  marginLeft: "10px",
                  marginRight: "5px",
                }}
              />
              Resume
            </Button>
          </a>
        </div>

        <div className={styles.photoCont}>
          <img
            src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=400x300"
            alt=""
            className={styles.heroImg}
          />
        </div>
        <div className={styles.socialCont}>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/antara-5aa95a209/"
            className={classes.a}
            target="_blank"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/Antara12345"
            className={classes.a}
            target="_blank"
          >
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
      </Fade>
    </div>
  )
}
