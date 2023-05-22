import { useState } from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="sections">
        <section id="about">
          <div>
            <h1 className="name">Kostas Fergadis</h1>
            <h2>Developer</h2>
          </div>
        </section>
        <Skills />
        <section id="projects">
          <h1>Projects</h1>
          <Projects />
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div className="contactlinks">
            <a target="_blank" href="mailto:kostasfergadis74@gmail.com">
              Email
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kostas-fergadis/"
            >
              Linkedin
            </a>
            <a target="_blank" href="https://github.com/Stylok5">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
