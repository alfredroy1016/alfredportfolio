import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Timeline() {
  return (
    <div id="history">
  <div className="items-container">
    <h1>Career History</h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="2024 - Present"
        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Brototype, Bengaluru</h4>
        <p>
          Developed responsive web applications using ReactJS, JavaScript, HTML, and CSS. Implemented RESTful APIs with Node.js and Express. Participated in Agile sprints, manual testing, and performance optimization.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2023 - 2024"
        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Development Bootcamp</h3>
        <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
        <p>
          Completed intensive training in full-stack web development including frontend, backend, and deployment practices.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2023"
        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Computer Applications (BCA)</h3>
        <h4 className="vertical-timeline-element-subtitle">Alphonsa Arts and Science College, Sulthan Bathery</h4>
        <p>
          Graduated with solid foundational knowledge in computer science and software development.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016 - 2018"
        iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}
      >
        <h3 className="vertical-timeline-element-title">Higher Secondary Education</h3>
        <h4 className="vertical-timeline-element-subtitle">GHSS Neervaram, Wayanad</h4>
        <p>
          Focused on foundational subjects that prepared for future education in technology.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
</div>

  );
}

export default Timeline;