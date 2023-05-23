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
      icon: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
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
      name: "Sass",
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
    {
      name: "Postman",
      icon: "https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Vite",
      icon: "https://vitejs.dev/logo-with-shadow.png",
    },
    {
      name: "Mongoose",
      icon: "https://img.icons8.com/?size=512&id=gKfcEStXI1Hm&format=png",
    },
  ];

  return (
    <div className="skillspage">
      <div className="skillsborder">
        <h1>Skills</h1>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
