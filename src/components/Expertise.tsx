import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDev, faArtstation } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "Android Studio",
    "CapacitorJS",
    "Django",
    "Python",
    "SQL",
    "Postman",
    "Puppeteer",
    "Firebase"
];

const labelsSecond = [
    "Pandas",
    "RStudio",
    "MATLAB",
    "C++",
    "C",
    "Scala",
    "Arduino",
    "Electronics Basics",
];

const labelsThird = [
    "OpenAI",
    "Unreal Engine",
    "Blender",
    "Figma",
    "FLstudio"
];

function Expertise() {
    return (
    <div className="container" id="skillset">
        <div className="skills-container">
            <h1>Skillset</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p> Developed full stack applications using the technologies listed below and migrated to mobile as well. Worked on web automation building web scrappers using puppeteer, to automate data gathering.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDev} size="3x"/>
                    <h3>Scientific computing and Systems programming</h3>
                    <p> This includes CubeSat Telemetry Subsystem, where I used an Arduino R3 to compute environmental and positional data to interpret. With C++, projects like a maze solver, implemented an IJVM simulator in C, performed statistical modeling in RStudio, and explored pervasive computing using MATLAB, data retrieval and wrangling with Pandas, etc...  </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faArtstation} size="3x"/>
                    <h3> Creative</h3>
                    <p> I have experience working with tools like OpenAI's API, Unreal Engine, Blender, Figma, and FL Studio. Built a basic solar system simulator with Blender and Unreal Engine 5 on a 1:10 scale for both time and space (dynamic orbits). Developed Astronomy Writer, a simple astronomoy based essay generator using OpenAI’s APIfor accurate data. </p>
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

export default Expertise;