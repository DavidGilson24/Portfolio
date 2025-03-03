import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/image.png';
import YouTube from 'react-youtube';
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
                <p>Designed and built a Telemetry subsystem using an Arduino R3 and computes data such as Temperature, Humidity, Pressure, UTC time for scheduling, Earth’s magnetic field and frequency and amplitude of vibrations (Full Report on GitHub). Developed on Arduino IDE (very similar to C++ with exceptions on compilation and running)</p>
            </div>
            <div className="project">
                <div>
                    <YouTube videoId="OswJ_Defd0s"/>
                </div>
                <div>
                <a href="https://www.youtube.com/watch?v=OswJ_Defd0s" target="_blank" rel="noreferrer"><h2>Solar Atlas</h2></a>
                </div>
                <p>Built a 3D model of the solar system on a 1:10 scale (time and space, so for example Saturn would need around 2.95 years to complete a full orbit in the simulator), simulating the orbit of the planets, by modeling with Blender and building it with Unreal Engine 5. Could possibly develop into a full scale project to be released as a free learning tool for all.</p>
            </div>
            <div className="project">
                <a href="https://davidgilson24.github.io/Space-Index/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://davidgilson24.github.io/Space-Index/" target="_blank" rel="noreferrer"><h2>Space Index</h2></a>
                <p> Space Index is a website I developed, that acts as an e-learning platform, to learn about our solar system, as well as some important man made-objects that were dpeloyed and sent to space (and some still active to this day). It's built using vanilla web dev tools such as HTML5, CSS3 and JavaScript</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Quasar</h2></a>
                <p> Quasar is an astronomy essay generator. It's a simple and straightforward generator that uses OpenAI's API and the GPT 3.5 model data to get accurate information, and generate proper essays (NB: If you want to implement it, you do need your own OpenAI API key as I do not provide it for obvious security reasons). Made on python.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;