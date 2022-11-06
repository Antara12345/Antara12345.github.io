// import { Text } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal";
import GitHubCalendar from "react-github-calendar";
import styles from "../Components/Styles/GithubStat.module.css";
// import { Text } from "drei";
const GithubStat = () => {
  return (
    <div className={styles.gitBox} >
      <Fade bottom>
        <p style={{fontSize:"40px",fontWeight:"400"}}>Github Calender and Stats</p>
        {/* <Text color="#383874" textAlign={"center"} mb={8} fontSize={{ base: "xl", md: "3xl" }}>Github Calender and Stats</Text> */}
      <div className={styles.Github}>
        <GitHubCalendar username="Antara12345" className="calender" />
      </div>
      <div className={styles.Github}>
        <a href="https://github.com/Antara12345" rel="noreferrer" target="_blank">
          <img
          
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=Antara12345&show_icons=true&count_private=true&theme=algolia"
            // height="192px"
          />
        </a>
      </div>
      </Fade>
    </div>
  );
};

export default GithubStat;