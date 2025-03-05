import './Projects.css';
import glucoseOverflowImage from '../../assets/images/glucoseoverflow.png';
import notenestImage from '../../assets/images/Notenest.png';
import keybladeStaysImage from '../../assets/images/KeybaldeStays.png';
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const project1="Engineered an interactive glucose tracking dashboard with React and Redux to allow users to log daily glucose levels and visualize trends using dynamically rendered charts. Implemented a PDF export feature for users to manage their data offline."
const project2="Built an intuitive note-taking and task management platform using React and Redux, allowing users to organize their notes with tags, tasks, and multiple notebooks. Incorporated real-time validation and collaborated in an Agile Scrum team."
const project3="Designed a Node.js backend for a Kingdom Hearts-inspired game that allows users to manage stays at fictional hotels, while providing an engaging UI with React. Integrated secure RESTful APIs for smooth data management between backend and frontend."

function Projects(){
    return (
        <div className="modal-content-container">
            <div className="section-container">
                <div className='header'>
                    <h3>PROJECTS</h3>
                </div>
                {/* Project 1*/}
                <div className="section-row-container">
                    <div className="screenshot-box">
                        <img src={glucoseOverflowImage} alt="Glucose Overflow Screenshot" />
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://glucoseoverflow.com" rel="noreferrer" target="_blank">Glucose Overflow <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project1}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>React</p>
                            <p>Redux</p>
                            <p>Flask</p>
                            <p>Python</p>
                            <p>SQLAlchemy</p>
                            <p>PostgreSQL</p>
                            <p>PDF Generation</p>
                        </div>
                        <div className="github-box" onClick={() => window.open('https://github.com/DayanZakrzewski/GlucoseOverflow', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project 2*/}
                <div className="section-row-container">
                    <div className="screenshot-box">
                        <img src={notenestImage} alt="Notenest Screenshot" />
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://notenest.com" rel="noreferrer" target="_blank">Notenest <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project2}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>React</p>
                            <p>Redux</p>
                            <p>Flask</p>
                            <p>Python</p>
                            <p>SQLAlchemy</p>
                            <p>PostgreSQL</p>
                            <p>Agile Scrum</p>
                        </div>
                        <div className="github-box" onClick={() => window.open('https://github.com/DayanZakrzewski/Notenest', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
                {/* Project 3*/}
                <div className="section-row-container">
                    <div className="screenshot-box">
                        <img src={keybladeStaysImage} alt="Keyblade Stays Screenshot" />
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <a className="project-link" href="https://keybladestays.com" rel="noreferrer" target="_blank">Keyblade Stays <HiOutlineExternalLink /></a>
                        </div>
                        <div className="experience-paragraph">
                            <p>{project3}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>React</p>
                            <p>Redux</p>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>Sequelize</p>
                            <p>RESTful APIs</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div className="github-box" onClick={() => window.open('https://github.com/DayanZakrzewski/KeybladeStays', '_blank', 'noopener,noreferrer')}>
                            <a className="github-text">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
