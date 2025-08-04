import React from "react";
import mock01 from '../assets/images/mock01.jpg';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.jpg';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.webp';

import '../assets/styles/Project.scss';

function Project() {
    return(
   <div className="projects-container" id="projects">
  <h1>Personal Projects</h1>
  <div className="projects-grid">
    
    <div className="project">
      <a href="https://www.adverrahub.com/" target="_blank" rel="noreferrer">
        <img src={mock02}  className="zoom" alt="Adverrahub" width="100%" />
      </a>
      <a href="https://github.com/alfredroy1016/adverrahub" target="_blank" rel="noreferrer">
        <h2>Adverrahub</h2>
      </a>
      <p>Digital agency website built using Node.js, Express, and EJS with a marketing-focused layout and contact system. Deployed on Render.</p>
    </div>

    <div className="project">
      <a href="https://github.com/alfredroy1016/promptpilot" target="_blank" rel="noreferrer">
        <img src={mock03} className="zoom" alt="PromptPilot" width="100%" />
      </a>
      <a href="https://promptpilot.in/" target="_blank" rel="noreferrer">
        <h2>PromptPilot</h2>
      </a>
      <p>An AI-powered prompt marketplace and tool using EJS and Node.js. Enables users to explore, search, and copy AI prompts efficiently.</p>
    </div>


    <div className="project">
      <a href="https://github.com/alfredroy1016/meetx-booking-app" target="_blank" rel="noreferrer">
        <img src={mock01} className="zoom" alt="MeetX Booking App" width="100%" />
      </a>
      <a href="https://github.com/alfredroy1016/meetx-booking-app" target="_blank" rel="noreferrer">
        <h2>MeetX Booking App</h2>
      </a>
      <p>A full-stack booking system that allows users to schedule and manage appointments. Built using Node.js, Express, and EJS. Focused on simplicity and user flow.</p>
    </div>

   

    <div className="project">
  <a href="https://github.com/alfredroy1016/luxrio-" target="_blank" rel="noreferrer">
    <img src={mock05} className="zoom" alt="Luxrio E-commerce Website" width="100%" />
  </a>
  <a href="https://github.com/alfredroy1016/luxrio-" target="_blank" rel="noreferrer">
    <h2>Luxrio – E-commerce Website</h2>
  </a>
  <p>Luxrio is a modern and responsive e-commerce website developed using EJS, Node.js, and Express. It features dynamic product listings, category filtering, shopping cart functionality, and a clean UI optimized for online retail experiences.</p>
</div>


    <div className="project">
      <a href="https://github.com/alfredroy1016" target="_blank" rel="noreferrer">
        <img src={mock04} className="zoom" alt="Netflix UI" width="100%" />
      </a>
      <a href="https://github.com/alfredroy1016" target="_blank" rel="noreferrer">
        <h2>Netflix UI Clone</h2>
      </a>
      <p>Built a responsive Netflix-inspired interface layout using HTML, CSS, and JavaScript. Designed to mimic the real platform’s visual appeal.</p>
    </div>

  </div>
</div>

    );
}

export default Project;