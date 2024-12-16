import React from "react";
import chatbot_RAG from '../assets/images/chatbot_RAG.png';
import craft_your_way from '../assets/images/craft_your_way.png';
import youtube_summarizer from '../assets/images/youtube_summarizer.png';
import '../assets/styles/Project.scss';
import Chip from '@mui/material/Chip';
import '../assets/styles/Experience.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "Google Cloud Text-to-Speech API",
    "Gemini API", 
    "RAG LLM"
];

const labelsSecond = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Gemini-Pro LLM", 
    "YouTube Data API"
];

const labelsThird = [
    "Figma"
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/SwethaBatta/product-portfolio-swetha/tree/master/chatBot-custom-data" target="_blank" rel="noreferrer"><img src={chatbot_RAG} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SwethaBatta/product-portfolio-swetha/tree/master/chatBot-custom-data" target="_blank" rel="noreferrer"><h2>Conversational AI Chatbot</h2></a>
                <p>Developed a chatbot using OpenAI with RAG (Retrieval-Augmented Generation) LLM (Large Language Model) to query specific non-sensitive user data and frequently asked questions, thereby enhancing users' self-service abilities and reducing the volume of requests processed by the Customer Service team</p>
                <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/SwethaBatta/product-portfolio-swetha/tree/master/YoutubeSummarizer" target="_blank" rel="noreferrer"><img src={youtube_summarizer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SwethaBatta/product-portfolio-swetha/tree/master/YoutubeSummarizer" target="_blank" rel="noreferrer"><h2>YouTube Summarizer</h2></a>
                <p>Developed a YouTube summarizer to provide quick insights to the user through an interface that accepts a YouTube URL and displays a formatted, easily readable and consumable text summary of the video content in 250 words.</p>
                <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/SwethaBatta/product-portfolio-swetha/tree/master/craft-your-way" target="_blank" rel="noreferrer"><img src={craft_your_way} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/SwethaBatta/product-portfolio-swetha/tree/master/craft-your-way" target="_blank" rel="noreferrer"><h2>Craft Your Way</h2></a>
                <p>Created a prototype for an e-commerce platform aimed at empowering handicraft artists and enthusiasts to have an enjoyable learning experience with an option to monetize their skill This was my capstone project for Product Leader Certificate (PLC) from Product School</p>
                <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;