import { useEffect, useState } from "react";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to handle expanding/collapsing a slide

  const projectDescriptions = [
    `For my first GA project, I created a Tetris clone using HTML, CSS, and JavaScript. 
    The game allows players to move and rotate tetrominoes to clear lines and score points.
     It features a pause function and three different levels that the game progresses through 
     after completing 5 and 10 lines respectively. 
    The game ends when the uncleared lines reach the top of the playing field.
    This was a challenging yet fun experience that aimed to improve my JavaScript skills and problem-solving abilities
    completed within a 13-day period.
      `,

    `For project 2, I created a Game Of Thrones website where you can search for a character’s name 
      and then go to the character’s individual page using the popular JavaScript library React. On each character's page,
      you can explore their notable quotes from the TV series and discover additional information. 
      The website leverages a public API to fetch character quotes and names. 
      With this project, I gained valuable experience in various aspects of React.js development,
      including React.js routing, utilizing the useState and useEffect hooks effectively, and making 
      HTTP requests with Axios to fetch data from external APIs.
      `,

    `This group project is a web application created by a team of three with the purpose of exploring
     and learning about popular foods from around the world. The project was completed within a 13-day period
      using the MERN stack, marking my first experience
      developing both the frontend and backend of an application.
     Mongo Atlas and Render were used for backend deployment while Netlify was used for the frontend.
      Users can search for foods by country and add them to their personal list page. Additionally, users 
      have the ability to leave reviews and create custom food entries.
      `,

    `This solo project aimed to develop a web application that facilitates communication
     among gamers and allows them to organize groups for a game of their choice. 
     The application features two pages displaying popular multiplayer games, and users can join,
      create, and edit groups, chat, edit their profiles, and visit other user profiles. 
      The project includes different permissions for owners and users, with group owners 
      having the ability to delete their group or remove members. It was completed within a 17-day period using Django and React. The backend was deployed on Heroku, and the frontend was deployed on Netlify.
  `,
  ];

  return (
    <div className="projectspage">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            onClick={() => handleSlideChange(index)}
            aria-label="Project 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            onClick={() => handleSlideChange(index)}
            aria-label="Project 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            onClick={() => handleSlideChange(index)}
            aria-label="Project 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            onClick={() => handleSlideChange(index)}
            aria-label="Project 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.imgur.com/kS82FHS.png"
              className="d-block w-100"
              alt="Project 1"
            />
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Project 1
            </button>
            <div className="className collapse" id="collapseExample">
              <div className="card card-body">
                <section className="details">
                  <div className="titlelink">
                    <h1>Project 1 - Tetris</h1>
                    <span>
                      Check out the deployed project
                      <a
                        href="https://stylok5.github.io/Project-1-Tetris/"
                        target="_blank"
                      >
                        here
                      </a>{" "}
                      and refer to the
                      <a
                        href="https://github.com/Stylok5/Project-1-Tetris/blob/main/README.md"
                        target="_blank"
                      >
                        readme
                      </a>{" "}
                      for more information
                      <p className="technologies">
                        Technologies used: JavaScript | HTML | CSS
                      </p>
                    </span>
                  </div>
                  <p className="description">{projectDescriptions[0]}</p>
                </section>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/hkI3JZl.png"
              className="d-block w-100"
              alt="Project 2"
            />
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Project 2
            </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <section className="details">
                  <div className="titlelink">
                    <h1>Project 2 - Game of Quotes</h1>
                    <span>
                      Check out the deployed project
                      <a
                        href="https://game-of-quotes.netlify.app/"
                        target="_blank"
                      >
                        {" "}
                        here
                      </a>{" "}
                      and its{" "}
                      <a
                        href="https://github.com/Stylok5/Project-1-Tetris/blob/main/README.md"
                        target="_blank"
                      >
                        readme
                      </a>
                      <p className="technologies">
                        Technologies used: React | Sass | RESTful API | Vite |
                        Axios | Excalidraw | Postman
                      </p>
                    </span>
                  </div>
                  <p>{projectDescriptions[1]}</p>
                </section>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/tuUwfxA.png"
              className="d-block w-100"
              alt="Project 3"
            />
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Project 3
            </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <section className="details">
                  <div className="titlelink">
                    <h1>Project 3 - Foods Paradise</h1>
                    <span>
                      Check out the deployed project
                      <a
                        href="https://foods-paradise.netlify.app/"
                        target="_blank"
                      >
                        {" "}
                        here
                      </a>{" "}
                      and its{" "}
                      <a
                        href="https://github.com/Stylok5/Project-3-FoodsParadise/blob/main/README.md"
                        target="_blank"
                      >
                        readme
                      </a>
                      <p>
                        Technologies used: MERN stack | Bootstrap | Sass |
                        Mongoose | Git Github | Render | Netlify | Mongo Atlas |
                        Excalidraw | Postman | Axios
                      </p>
                    </span>
                  </div>
                  <p>{projectDescriptions[2]}</p>
                </section>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/y7Hs9za.png"
              className="d-block w-100"
              alt="Project 4"
            />
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Project 4
            </button>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                <section className="details">
                  <div className="titlelink">
                    <h1>Project 4 - Gamers Assemble</h1>
                    <span>
                      Check out the deployed project
                      <a
                        href="https://gamers-assemble.netlify.app/"
                        target="_blank"
                      >
                        {" "}
                        here
                      </a>{" "}
                      and its
                      <a
                        href="https://github.com/Stylok5/Project-4-GamersAssemble_Frontend#readme"
                        target="_blank"
                      >
                        readme
                      </a>
                      <p>
                        Technologies used: Python | Django | React | PostgreSQL
                        | Heroku | Git Github | Postman | Netlify | Vite | Axios
                      </p>
                    </span>
                  </div>
                  <p>{projectDescriptions[3]}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="slidebtns">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
