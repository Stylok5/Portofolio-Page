import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
import Interests from "../components/Interests";

const HomePage = () => {
  const foo = [1, 2];
  let bar = foo;
  console.log(bar);
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
        <div className="projectsinterests">
          <section id="projects">
            <h1 className="projecttitle">Projects</h1>
          </section>
          <div>
            <Projects />
          </div>
          <section id="interests">
            <Interests />
          </section>
        </div>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
