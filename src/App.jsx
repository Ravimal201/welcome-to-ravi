import { useState } from "react";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import myImg from "./reources/images/aboutmy.png";
import SkillPage from "./views/SkillPage";
import ProjectPage from "./views/ProjectPage";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About
          title="About me"
          description="I’m a Computer Science undergraduate at Uva Wellassa University of Sri Lanka, graduating in 2027. I’m passionate about software development, game development, web technologies, and UI/UX design. I enjoy working in teams and continuously improving my skills."
          education={{
            degree: "BSC (HONS) IN COMPUTER SCIENCE AND TECHNOLOGY",
            university: "Uva Wellassa University of Sri Lanka",
            year: "2027",
            image: myImg,
          }}
        />
      </section>

      <section className="section skill" id="skills">
        <SkillPage />
      </section>

      <section className="section projects" id="projects">
        {<ProjectPage />}
      </section>

      <section className="section contacts" id="contact">
        {/* <Contact /> */}
      </section>
    </>
  );
}

export default App;
