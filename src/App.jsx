import { useState } from "react";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import SkillPage from "./views/SkillPage";
import ProjectPage from "./views/ProjectPage";
import Contacts from "./views/Contacts";
import Achievement from "./views/Achivements";
import Footer from "./views/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>

      <section className="skill" id="skills">
        <SkillPage />
      </section>

      <section className="projects" id="projects">
        {<ProjectPage />}
      </section>

      <section className="section achievements" id="certificates">
        {<Achievement />}
      </section>

      <section className="section contacts" id="contact">
        {<Contacts />}
      </section>
      <Footer />
    </>
  );
}

export default App;
