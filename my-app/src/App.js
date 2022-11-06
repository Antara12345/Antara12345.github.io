
import "./App.css"
import { AboutSection } from "./Components/AboutSection"

import { ContactSection } from "./Components/ContactSection"
import GithubStat from "./Components/GithubSection"
import { HeroSection } from "./Components/HeroSection"
import  Navbar  from "./Components/Navbar"
import { ProjectsSection } from "./Components/ProjectsSection"
import { SkillsSection } from "./Components/SkillsSection"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GithubStat/>
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
