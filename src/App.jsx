import './App.css'
import {Header} from "./components/Header.jsx";
import {HeroSection} from "./components/HeroSection.jsx";
import {SkillsSection} from "./components/SkillsSection.jsx";
import {ProjectsSection} from "./components/ProjectsSection.jsx";
import {ContactSection} from "./components/ContactSection.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </>
  )
}

export default App
