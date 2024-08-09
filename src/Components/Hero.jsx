import React from "react";

const Hero = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              Travel.co
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
        >
              <span className="navbar-toggler-icon text-light"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    href="#1"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#2">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#3">
                    CONTACTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    PAGE 1
                  </a>
                </li>
                <li className="nav-item4">
                  <a className="nav-link text-light" href="#">
                    PAGE 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <div className="hero">
            <h1>Travel</h1>
          </div>
          <div className="section">
            <p>
              Here are my favorite travel and adventure quotes, paired with
              images from my journeys around the world{" "}
            </p>
          </div>
          <button id="btn1">Read More</button>
        </main>
      </header>
    </div>
  );
};

export default Hero;
