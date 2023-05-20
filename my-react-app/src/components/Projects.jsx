const Projects = () => {
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
            aria-label="Project 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Project 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Project 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
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
            <section className="details">
              <div className="titlelink">
                <h1>Project 1 - Tetris</h1>
                <span>
                  Check out the deployed project
                  <a
                    href="https://stylok5.github.io/Project-1-Tetris/"
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
                </span>
              </div>
              <p>
                This group project was a web application with the purpose of
                exploring and learning about popular foods from around the world
                created by a team of three. Users could search for foods by
                country and add them to their personal List page. As a team, we
                focused on effective collaboration and version control using Git
                and Github. One of my tasks was to create the List page where
                users could view and remove their added foods, as well as create
                custom entries. It was a great opportunity to practice
                communication, organization, and task delegation while working
                towards a common goal.
              </p>
            </section>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/hkI3JZl.png"
              className="d-block w-100"
              alt="Project 2"
            />
            <section className="details">
              <div className="titlelink">
                <h1>Project 2 - Game of Quotes</h1>
                <span>
                  Check out the deployed project
                  <a href="https://game-of-quotes.netlify.app/" target="_blank">
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
                </span>
              </div>
              <p>
                This group project was a web application with the purpose of
                exploring and learning about popular foods from around the world
                created by a team of three. Users could search for foods by
                country and add them to their personal List page. As a team, we
                focused on effective collaboration and version control using Git
                and Github. One of my tasks was to create the List page where
                users could view and remove their added foods, as well as create
                custom entries. It was a great opportunity to practice
                communication, organization, and task delegation while working
                towards a common goal.
              </p>
            </section>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/tuUwfxA.png"
              className="d-block w-100"
              alt="Project 3"
            />
            <section className="details">
              <div className="titlelink">
                <h1>Project 3 - Foods Paradise</h1>
                <span>
                  Check out the deployed project
                  <a href="https://foods-paradise.netlify.app/" target="_blank">
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
                </span>
              </div>
              <p>
                This group project was a web application with the purpose of
                exploring and learning about popular foods from around the world
                created by a team of three. Users could search for foods by
                country and add them to their personal List page. As a team, we
                focused on effective collaboration and version control using Git
                and Github. One of my tasks was to create the List page where
                users could view and remove their added foods, as well as create
                custom entries. It was a great opportunity to practice
                communication, organization, and task delegation while working
                towards a common goal.
              </p>
            </section>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/y7Hs9za.png"
              className="d-block w-100"
              alt="Project 4"
            />
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
                  and its{" "}
                  <a
                    href="https://github.com/Stylok5/Project-4-GamersAssemble_Frontend#readme"
                    target="_blank"
                  >
                    readme
                  </a>
                </span>
              </div>
              <p>
                This group project was a web application with the purpose of
                exploring and learning about popular foods from around the world
                created by a team of three. Users could search for foods by
                country and add them to their personal List page. As a team, we
                focused on effective collaboration and version control using Git
                and Github. One of my tasks was to create the List page where
                users could view and remove their added foods, as well as create
                custom entries. It was a great opportunity to practice
                communication, organization, and task delegation while working
                towards a common goal.
              </p>
            </section>
          </div>
        </div>
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
  );
};

export default Projects;
