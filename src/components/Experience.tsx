import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJira } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Experience.scss';

const labelsFirst = [
    "JIRA",
    "Figma",
    "Slack",
    "Trello",
    "Git"
];

const labelsSecond = [
    "React",
    "Node.js",
    "Python",
    "SQL",
    "NoSQL",
    "MERN",
    "Git",
    "GitHub Actions",
    "AWS",
    "Selenium",
];

const labelsThird = [
    "Flask",
    "Python",
    "Google Cloud Text-to-Speech API",
    "Gemini API",
    "Gemini-Pro",
    "RAG LLM"
];

function Experience() {
    return (
    <div className="container" id="experience">
        <div className="skills-container">
            <h1>Experience</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJira} size="3x"/>
                    <h3>Technical Product Management</h3>
                    <p>Experienced Technical Product Manager with a strong background in driving product development, defining technical requirements, and collaborating cross-functionally to deliver innovative solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Proficient in full-stack development, with expertise in building and deploying scalable web applications using technologies such as JavaScript, Node.js, React, and SQL/NoSQL databases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Explored and suggested process improvements by integrating Generative AI and LLMs into product workflows, enhancing automation and decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Experience;