import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const projectDescriptions = [
    `For my first GA project, I created a Tetris clone using HTML, CSS, and JavaScript. 
    The game allows players to move and rotate tetrominoes using 
    the arrow keys, enabling them to clear lines and accumulate points.
     It features a play/pause and reset button as well as three different difficulty levels that the game progresses through 
     after the player completes 5 and 10 lines respectively. 
     The game concludes with a game over message when the stack of uncleared lines reaches the top of the playing field, signifying the end and resetting the game. 
     Important to note that the current styling lacks responsiveness and has been specifically optimized for 14-inch MacBook and 27-inch screens.
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
      have the ability to leave reviews and create custom food entries. We collaborated closely throughout the project, 
      utilizing tools like Zoom and Vs Code's live share feature. 
      As the deadline approached, we divided the workload to ensure timely completion. 
      My specific contributions included creating the "My List" page and assisting in implementing the review functionality.
      `,
    `
    This project aimed to develop a web application for gamers to organize groups and communicate effectively. 
    Completed in 17 days using Django and React, the app features two pages showcasing popular multiplayer games. 
    Users can click on a game to access its dedicated page, view details, and see existing groups. The group page 
    allows users to join or leave groups, chat with members, and provide ratings. Group owners have additional privileges 
    to edit details and remove members. The user page, accessible by clicking the username in the navigation bar, enables 
    users to edit their profile,
     create new groups, and delete existing ones. Predefined login credentials ("user@gmail.com" and "userPassword") facilitate 
     testing, with additional variations available by adding "user1", "user2", "user3" to the email address. Error handling 
     includes alerts for 
     most user actions. The backend is deployed on Heroku, and the frontend on Netlify.
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
              src="https://i.imgur.com/VxqXYm5.png"
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
                    <div className="heading">
                      <h1>
                        Project 1 - Tetris
                        <a
                          href="https://stylok5.github.io/Project-1-Tetris/"
                          target="_blank"
                        >
                          <FaExternalLinkAlt />
                        </a>{" "}
                      </h1>
                    </div>
                    <span>
                      Refer to the{" "}
                      <a
                        href="https://github.com/Stylok5/Project-1-Tetris/blob/main/README.md"
                        target="_blank"
                      >
                        ReadMe <FaGithub />
                      </a>{" "}
                      for more information
                      <p className="technologies">
                        Technologies :
                        <span> JavaScript | HTML | CSS | Git | GitHub</span>
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
              src="https://i.imgur.com/eKMSomT.png"
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
                    <div className="heading">
                      <h1>
                        Project 2 - Game of Quotes
                        <a
                          href="https://game-of-quotes.netlify.app/"
                          target="_blank"
                        >
                          <FaExternalLinkAlt />
                        </a>{" "}
                      </h1>
                    </div>
                    <span>
                      Refer to the{" "}
                      <a
                        href="https://github.com/Stylok5/Project-2-GameofQuotes/blob/main/README.md"
                        target="_blank"
                      >
                        ReadMe <FaGithub />
                      </a>{" "}
                      for more information
                      <p className="technologies">
                        Technologies :
                        <span>
                          {" "}
                          React | Sass | RESTful API | Vite | Git | GitHub |
                          Axios | Excalidraw | Postman
                        </span>
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
              src="https://i.imgur.com/HF3JoA2.jpg"
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
                    <div className="heading">
                      <h1>
                        Project 3 - Foods Paradise
                        <a
                          href="https://foods-paradise.netlify.app/"
                          target="_blank"
                        >
                          <FaExternalLinkAlt />
                        </a>{" "}
                      </h1>
                    </div>
                    <span>
                      Refer to the{" "}
                      <a
                        href="https://github.com/Stylok5/Project-3-FoodsParadise/blob/main/README.md"
                        target="_blank"
                      >
                        ReadMe <FaGithub />
                      </a>{" "}
                      for more information
                      <p className="technologies">
                        Technologies :
                        <span className="tech-list">
                          MERN stack | Bootstrap | Sass | Mongoose | Git |
                          GitHub | Render | Netlify | Mongo Atlas | Excalidraw |
                          Postman | Axios
                        </span>
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
                    <div className="heading">
                      <h1>
                        Project 4 - Gamers Assemble
                        <a
                          href="https://gamers-assemble.netlify.app/"
                          target="_blank"
                        >
                          <FaExternalLinkAlt />
                        </a>{" "}
                      </h1>
                    </div>
                    <span>
                      Refer to the{" "}
                      <a
                        href="https://github.com/Stylok5/Project-4-GamersAssemble_Frontend/blob/main/README.md"
                        target="_blank"
                      >
                        ReadMe <FaGithub />
                      </a>{" "}
                      for more information
                      <p className="technologies">
                        Technologies :
                        <span className="tech-list">
                          Python | Django | React | PostgreSQL | Heroku | Git |
                          GitHub | Postman | Netlify | Vite | Axios
                        </span>
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
