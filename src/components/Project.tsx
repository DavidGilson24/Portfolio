import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/Trailer.mp4';
import mock10 from '../assets/images/cubesat.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/DavidGilson24/CubeSat-Subsystem" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/DavidGilson24/CubeSat-Subsystem" target="_blank" rel="noreferrer"><h2>CubeSat Telemetry Subsystem</h2></a>
                <p>Designed and built a Telemetry subsystem using an Arduino R3 and computes data such as Temperature, Humidity, Pressure, UTC time for scheduling, Earth’s magnetic field and frequency and amplitude of vibrations (Full Report on GitHub</p>
            </div>
            <div className="project">
                <div>
                    <video className="zoom" width="100%" controls>
                    <source src={mock09} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div>
                    <h2>Solar Atlas</h2>
                </div>
                <p>Built a 3D model of the solar system on a 1:10 scale (time and space), simulating the orbit of the planets, by modeling with Blender and building it with Unreal Engine 5.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Datum: Integrated Learning Platform</h2></a>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;