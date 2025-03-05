import './Experience.css';

const experience0="Completed a rigorous 6-month, full-time software engineering bootcamp at App Academy, gaining expertise in full-stack web development. Developed scalable web applications using modern technologies such as React, Flask, SQLAlchemy, and PostgreSQL. Integrated external APIs and AWS S3 for enhanced functionality. Collaborated in teams using Agile methodologies, hosting daily stand-ups, and managing debugging processes."
const experience1="Program Coordinator at FACES For The Future. Managed and optimized program workflows for over 100 students. Used project management tools and strategies to ensure smooth execution and timely delivery of educational content. Designed and implemented curricula, collaborating with diverse stakeholders. Mentored students, providing career development guidance and fostering academic growth."
const experience2="Relief Worker at MercyWorks in Warsaw, Poland. Assisted Ukrainian refugees by renovating homes, preparing meals, and organizing a children’s day. Helped secure donations and raised awareness through media outreach. Assisted healthcare professionals with wound care in medical tents and delivered essential supplies to support ongoing relief efforts."
const experience3="Developed an interactive glucose tracking dashboard using React and Redux in the Glucose Overflow project, enabling users to log daily glucose levels and visualize trends. Implemented PDF export features with Python and Flask for offline data management and created a community engagement module with SQLAlchemy and Flask for health tips and recipe sharing."
const experience4="Built an intuitive note-taking and task management application with React and Redux in the Notenest project. Implemented dynamic form validation using React Hooks and collaborated with an Agile Scrum team to deliver features efficiently. Worked on real-time data integrity and user experience enhancements."
const experience5="Designed and developed Keyblade Stays, a game-inspired application combining a Node.js backend with Express and Sequelize. Created a user interface with React, integrating secure RESTful APIs for smooth frontend-backend communication and ensuring scalability and performance."

function Experience() {
    return (
        <div className="modal-content-container">
            {/* About Me Section*/}
            <div className="section-container">
                <div className='header'>
                    <h3>ABOUT ME</h3>
                </div>
                <div className="paragraph">
                    <p>Hi, I&apos;m Dayan! I&apos;m a full-stack software developer with a unique blend of expertise in software engineering and healthcare operations. After completing a rigorous 6-month software engineering bootcamp at <a className="keyword-link" href="https://www.appacademy.io/" rel="noreferrer" target="_blank">App Academy</a>, I am excited to contribute my skills to developing scalable systems that improve healthcare delivery and operational efficiency.</p>
                </div>
                <div className="paragraph">
                    <p>My background in healthcare has equipped me with strong problem-solving and analytical skills, which I now apply to building intuitive, user-centered web applications. I have worked on a range of projects that showcase my proficiency in <a className="keyword-link" href="https://github.com/yourgithub" rel="noreferrer" target="_blank">React, Flask, Python, SQL, and more</a>. I am passionate about using technology to make a positive impact on people's lives.</p>
                </div>
                <div className="paragraph">
                    <p>Outside of work, I enjoy badminton, hiking, exploring museums, and experimenting with new recipes.</p>
                </div>
            </div>
            {/* Experience Section*/}
            <div className="section-container">
                <div className='header'>
                    <h3>EXPERIENCE</h3>
                </div>
                {/* Experience 1 - Software Engineer Bootcamp */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>JUN - DEC 2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Full Stack Software Engineer @ App Academy</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience0}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>React</p>
                            <p>Flask</p>
                            <p>SQLAlchemy</p>
                            <p>PostgreSQL</p>
                            <p>AWS S3</p>
                        </div>
                    </div>
                </div>
                {/* Experience 2 - Program Coordinator */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2022 - 2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Program Coordinator @ FACES For The Future</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience1}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Project Management</p>
                            <p>Mentoring</p>
                            <p>Collaboration</p>
                        </div>
                    </div>
                </div>
                {/* Experience 3 - Relief Worker */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2022</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Relief Worker @ MercyWorks</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience2}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Volunteer Coordination</p>
                            <p>Healthcare Assistance</p>
                        </div>
                    </div>
                </div>
                {/* Experience 4 - Glucose Overflow Project */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Full Stack Developer @ Glucose Overflow</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience3}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>React</p>
                            <p>Redux</p>
                            <p>Python</p>
                            <p>Flask</p>
                            <p>SQLAlchemy</p>
                        </div>
                    </div>
                </div>
                {/* Experience 5 - Notenest Project */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Full Stack Developer @ Notenest</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience4}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>React</p>
                            <p>Redux</p>
                            <p>Python</p>
                            <p>SQLAlchemy</p>
                        </div>
                    </div>
                </div>
                {/* Experience 6 - Keyblade Stays Project */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Full Stack Developer @ Keyblade Stays</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>{experience5}</p>
                        </div>
                        <div className="skill-tabs">
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>Sequelize</p>
                            <p>React</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Education Section */}
            <div className="section-container">
                <div className='header'>
                    <h3>EDUCATION</h3>
                </div>
                {/* Education 1 */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2024</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Full Stack Web Development Certificate</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>App Academy</p>
                        </div>
                    </div>
                </div>
                {/* Education 2 */}
                <div className="section-row-container">
                    <div className="timeline-box">
                        <p>2017</p>
                    </div>
                    <div className="experience-container">
                        <div className="experience-title">
                            <p>Bachelor of Science, Public Health</p>
                        </div>
                        <div className="experience-paragraph">
                            <p>University of California, Irvine</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
