import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiBootstrap } from "react-icons/si"
import { SiChakraui } from "react-icons/si"
import { SiStyledcomponents } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "PharmEasy.com clone",
    img: "Pharm.png.png",
    link: "https://lucent-duckanoo-8aee96.netlify.app",
    git: "https://github.com/VinayPathania/Team-Spartans.git",
    about:
      "This is e-commerce website used for buying and supplying medicine across the world.This was a team project where I with my teammates had created.My task was to do Login and Signup functionality and help in the css part. ",
    stacks: [
     // <SiReact className={styles.stackIcon} />,
      // <SiNodedotjs className={styles.stackIcon} />,
      // <SiExpress className={styles.stackIcon} />,
      // <SiMongodb className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Zoomcar.com clone",
    img: "Zoom.png.png",
    link: "https://relaxed-axolotl-1b3408.netlify.app/index.html",
    git: "https://github.com/Abiramirajasekar/ZoomCar",
    about:
      " This is Zoom Car website which provide rental car. This was a team project where I with my teammates had created.My task was to do Login and Signup functionality, helped in the css part and some js functionality part.",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "RentoMojo.com clone",
    img: "/rento.png",
    link: "https://thotapavankumar.github.io/Zara_Project_Clone/",
    git: "https://github.com/Gajanan-Watt/zara_web.git",
    about:
      "An online rental company here to offer you easy access to a smarter & better lifestyle. Our services let you rent lifestyle essentials like furniture, appliances and more at affordable prices.",
    stacks: [
      
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,
      <SiBootstrap className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <SiStyledcomponents className={styles.stackIcon} />
    ],
  },
  // {
  //   name: "You Tube App",
  //   img: "/youtube.png",
  //   link: "https://you-tube-mini.netlify.app/",
  //   git: "https://github.com/sanketpatil05/Youtube",
  //   about:
  //     "This project will let you design the pixel art. Let your creativity flow and convert them to images",
  //   stacks: [
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // }
  
  // {
  //   name: "Contio",
  //   img: "/contio.png",
  //   link: "https://contio.netlify.app/",
  //   git: "https://github.com/chandan1499/contio",
  //   about:
  //     "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help their peers using a built-in chat app",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiNodedotjs className={styles.stackIcon} />,
  //     <SiExpress className={styles.stackIcon} />,
  //     <SiMongodb className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },

 
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects" style={{ scrollMarginTop: "80px", paddingTop: "60px", boxSizing: "border-box" }}>
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
