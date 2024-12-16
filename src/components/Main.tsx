import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/SwethaBatta"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/swethabatta/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Swetha Batta</h1>
          <h2>Technical Product Manager / Senior Software Engineer</h2>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/SwethaBatta"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/swethabatta/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <p>
            <i>
              Passionate Product Manager with diverse experience in product
              management and software development, leveraging a user-centric
              approach to deliver impactful solutions and drive innovation
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
