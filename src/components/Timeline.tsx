import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Academic and professional history</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)', display: 'flex', alignItems: 'center' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022 - 2025"
            iconStyle={{ background: 'rgb(14, 142, 247)' , color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src="https://cdn.brandfetch.io/idaOMqOyIj/w/800/h/843/theme/dark/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B" 
                alt="VU Amsterdam Logo" 
                style={{ width: '40px', height: '40px' }} 
              />
              
              {/* Text Content */}
              <div>
                <h3 className="vertical-timeline-element-title">BSc Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">Netherlands, Amsterdam</h4>
                <p>Computer science bachelor's degree at Vrije Universiteit Amsterdam</p>
              </div>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2024 - Ongoing"
            iconStyle={{ background: 'rgb(14, 142, 247)', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQF-U3iJIjhUEQ/company-logo_200_200/company-logo_200_200/0/1719257931287/capisoftnl_logo?e=2147483647&v=beta&t=DJVMwESQuQlu-dZnjKAz_mvKyZEX7held3_jA7uaDS0" 
                alt="Capisoft Logo" 
                style={{ width: '40px', height: '40px' }} 
              />
              <div>
                <h3 className="vertical-timeline-element-title">Full Stack Developer Internship</h3>
                <h4 className="vertical-timeline-element-subtitle">Netherlands, Amsterdam</h4>
                <p>
                  Frontend Development, Backend Development, Mobile Development
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;