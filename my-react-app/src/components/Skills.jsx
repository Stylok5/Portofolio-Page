import { useState } from "react";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=2x&id=tGvHBPJaKqEd&format=gif",
    },
    {
      name: "HTML",
      icon: "https://img.icons8.com/?size=2x&id=23028&format=png",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/?size=2x&id=38273&format=png",
    },

    {
      name: "React",
      icon: "https://img.icons8.com/?size=2x&id=YYYhFVbH4vFv&format=gif",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
    },
    {
      name: "Express.js",
      icon: "https://expressjs.com/images/express-facebook-share.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/?size=512&id=74402&format=png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=2x&id=Rc0Xn5AtE8kX&format=gif",
    },
    {
      name: "Django",
      icon: "https://img.icons8.com/?size=2x&id=mUBILbYvUMq8&format=png",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/?size=2x&id=25010&format=png",
    },
    {
      name: "SASS",
      icon: "https://img.icons8.com/?size=2x&id=DYjckUr8cF8H&format=png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/?size=2x&id=84710&format=png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/?size=2x&id=38388&format=png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/?size=2x&id=v551nqGeHhGn&format=gif",
    },

    {
      name: "VS Code",
      icon: "https://img.icons8.com/?size=2x&id=9OGIyU8hrxW5&format=png",
    },
    {
      name: "Heroku",
      icon: "https://img.icons8.com/?size=512&id=31085&format=png",
    },
    {
      name: "Netlify",
      icon: "https://img.icons8.com/?size=512&id=sBo1RJ3rjbje&format=png",
    },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <img src={skill.icon} alt={skill.name} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
