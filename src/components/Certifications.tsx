import React from "react";
import cspo from '../assets/images/cspo.png';
import PLC from '../assets/images/PLC.png';
import '../assets/styles/Project.scss';
import '../assets/styles/Experience.scss';

function Certifications() {
    return(
    <div className="projects-container" id="certifications">
        <h1>Certifications</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={cspo} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Certified Scrum Product Owner (CSPO)</h2>
            </div>
            <div className="project">
                <img src={PLC} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Product Leader Certificate - Product School</h2>
            </div>
        </div>
    </div>
    );
}

export default Certifications;