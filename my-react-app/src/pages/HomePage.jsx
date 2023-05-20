import { useState } from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
  const [navlinks, setNavLinks] = useState();

  return (
    <div classname="homepage">
      <div className="sections">
        <section className="title">
          <div>
            <h1 className="name">Kostas Fergadis</h1>
            <h2>Developer</h2>
          </div>
          {/* <img
            className="backgroundimg"
            src="https://technomotion.ca/wp-content/uploads/2019/05/Abstract-Technology-Background-250119211.jpg"
          /> */}
        </section>
        <section id="about">
          <h2>About Me</h2>
          {/* Add your about me content here */}
        </section>
        <Skills />
        <section id="projects">
          <h2>Projects</h2>
          <Projects />
        </section>
        <section id="contact">
          <h2>Contact</h2>
          {/* Add your contact information or form here */}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
