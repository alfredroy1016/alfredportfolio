import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faJs, faNodeJs, faReact, faMdb ,faGitAlt} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">


<div className="skill">
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <h3>HTML5</h3>
                    <p>
        I utilize HTML5 to structure web content with semantic markup, ensuring accessibility, SEO optimization, and a clean foundation for responsive design.
</p>

                </div>



                        
                <div className="skill">
                    <FontAwesomeIcon icon={faCss3Alt} size="3x"/>
                    <h3>CSS3</h3>
                    <p>
       With CSS3, I bring designs to life using modern layout techniques like Flexbox and Grid. I ensure responsive design across devices with smooth transitions and visual consistency.


    </p>
                    
                </div>





                
                <div className="skill">
                    <FontAwesomeIcon icon={faJs} size="3x"/>
                    <h3>JavaScript</h3>
                    <p>JavaScript is the foundation of all my frontend logic. I have deep expertise in ES6+ features, asynchronous programming (Promises, async/await), and DOM manipulation to build interactive, high-performance applications. Build dynamic, high-performing web interfaces with React. I specialize in crafting responsive, component-driven user experiences using modern React practices including hooks, context API, and modular architecture. My projects leverage React’s powerful ecosystem for scalable frontend development that integrates seamlessly with RESTful and GraphQL APIs.
    </p>
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>REACT</h3>
                    <p>
        Build dynamic, high-performing web interfaces with React. I specialize in crafting responsive, component-driven user experiences using modern React practices including hooks, context API, and modular architecture. My projects leverage React’s powerful ecosystem for scalable frontend development that integrates seamlessly with RESTful and GraphQL APIs.
    </p>
                   
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Node.js</h3>
                    <p>Node.js allows me to build fast, scalable, and efficient server-side applications using JavaScript. I use it to develop RESTful APIs, real-time services, and backend logic, leveraging its non-blocking architecture and powerful ecosystem of libraries through npm.</p>
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMdb } size="3x"/>
                    <h3>MongoDB</h3>
                    <p>MongoDB empowers me to build flexible, scalable, and high-performance applications using a NoSQL, document-based approach. I use it to model dynamic schemas, store unstructured data efficiently, and implement complex querying and aggregation pipelines, making it ideal for modern web and AI-driven applications.</p>
                    
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faGitAlt} size="3x"/>
                    <h3>Git</h3>
                    <p>Git is at the core of my version control strategy, enabling me to track changes, collaborate seamlessly with teams, and maintain clean, organized codebases. I utilize branching, merging, and pull request workflows to ensure smooth development cycles, efficient debugging, and consistent deployment practices.

</p>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;