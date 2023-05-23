import { useState } from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="sections">
        <div className="aboutskills">
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </div>
        <div className="projcontact">
          <section id="projects">
            <h1 className="projecttitle">Projects</h1>
          </section>
          <div>
            <Projects />
          </div>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
