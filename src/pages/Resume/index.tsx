import styles from './Resume.module.scss'

export default function Resume(){
    return(
        <main className={styles.container}>
            <h2>FORMATION</h2>
            <ul>
                <li>SÉBIQ - High-School Graduation – Diplôme d’éducation secondaire internationale (DESI-Quebec) (August/19 – June/22)</li>
                <li>AWS Certified Cloud Practitioner</li>
                <li>Accepted at uOttawa in a BASc Computer Engineering (Starts at September/23)</li>
                <li>Front-End Developer (300 hours)</li>
                <ul>
                    <li>Skills developed:</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>HTML and CSS</li>
                    <li>Typescript</li>
                    <li>Accessibility</li>
                    <li>JavaScript for front-end</li>
                    <li>WebSocket</li>
                    <li>Threads in JavaScript</li>
                    <li><a href="https://cursos.alura.com.br/user/erikrmb/fullCertificate/cb5bede56c62599ec13639a51749e76f">Certificate</a></li>
                </ul>
                <li>Back-end Developer in Java (500 hours)</li>
                <ul>
                    <li>Skills developed:</li>
                    <li>Spring framework</li>
                    <li>APIs REST</li>
                    <li>SOLID</li>
                    <li>Design Patterns</li>
                    <li>DDD (Domain Driven Development)</li>
                    <li>TDD (Test Driven Development)</li>
                    <li>OOP with JAVA</li>
                    <li>SQL, JPA, JDBC</li>
                    <li>Software Engineering</li>
                    <li>Microservices</li>
                    <li>Threads</li>
                    <li>CORS (Cross Origin Resource Sharing)</li>
                    <li><a href="https://cursos.alura.com.br/user/erikrmb/fullCertificate/cb5bede56c62599ec13639a51749e76f">Certificate</a></li>
                </ul>
                <li>Back-end Developer in Python (375 hours)</li>
                <ul>
                    <li>Skills developed:</li>
                    <li>Django</li>
                    <li>Django Rest Framework</li>
                    <li>APIs REST</li>
                    <li>TDD (Test Driven Development)</li>
                    <li>OOP with Python</li>
                    <li>SQL</li>
                    <li>Software Engineering</li>
                    <li>Microservices</li>
                    <li>CORS (Cross Origin Resource Sharing)</li>
                    <li><a href="https://cursos.alura.com.br/user/erikrmb/fullCertificate/cb5bede56c62599ec13639a51749e76f">Certificate</a></li>
                </ul>
                <li>Back-end Developer in JavaScript (365 hours)</li>
                <ul>
                    <li>Skills developed:</li>
                    <li>Node.JS</li>
                    <li>Express</li>
                    <li>APIs REST</li>
                    <li>TDD (Test Driven Development)</li>
                    <li>OOP with JavaScript</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>ORM with Sequelize</li>
                    <li>Software Engineering</li>
                    <li>Microservices</li>
                    <li>WebSocket</li>
                    <li>CORS (Cross Origin Resource Sharing)</li>
                    <li><a href="https://cursos.alura.com.br/user/erikrmb/fullCertificate/cb5bede56c62599ec13639a51749e76f">Certificate</a></li>
                </ul>
            </ul>

            <h2>PROFESSIONAL EXPERIENCE</h2>
            <ol>
                <li>
                    Dishwasher at “Le Café des Artistes de la Lièvre” (July/21 – present)
                    <ul>
                        <li>Skills developed:</li>
                        <li>Organization and autonomy</li>
                        <li>Teamwork and communication</li>
                        <li>Resilience in a high pressure and demand environment</li>
                    </ul>
                </li>
                <li>
                    Waiter at “Le Café des Artistes de la Lièvre” (March/23 – present)
                    <ul>
                        <li>Skills developed:</li>
                        <li>Emotional intelligence</li>
                        <li>Teamwork and communication</li>
                        <li>Resilience in a high pressure and demand environment</li>
                    </ul>
                </li>
                <li>
                    Self-Employed (August/22 – Present)
                    <ul>
                        <li>Skills developed:</li>
                        <li>Organization and autonomy</li>
                        <li>Communicate effectively with clients</li>
                        <li>Develop production applications using WordPress and AWS.</li>
                        <li>Time Management</li>
                    </ul>
                </li>
            </ol>

            <h2>LANGUAGES</h2>
            <ul>
                <li>English</li>
                <ul>
                    <li>Reading: Fluency</li>
                    <li>Writing: Advanced</li>
                    <li>Speaking: Advanced</li>
                    <li>Comprehension: Fluency</li>
                </ul>
                <li>French</li>
                <ul>
                    <li>Reading: Fluency</li>
                    <li>Writing: Advanced</li>
                    <li>Speaking: Advanced</li>
                    <li>Comprehension: Fluency</li>
                </ul>
                <li>Portuguese: Native Speaker</li>
            </ul>

            <h2>OTHER SKILLS</h2>
            <ul>
                <li>Soft Skills such as receiving and giving feedback, effective communication, and emotional intelligence</li>
                <li>CI/CD (GitHub Actions, Jenkins)</li>
                <li>Adobe Photoshop, Illustrator, and Figma</li>
            </ul>

            <h2>OTHER MERITS</h2>
            <ul>
                <li>Médaille de la Reconnaissance Citoyenne awarded by the House of Commons – Canada (2022)</li>
            </ul>

            <h2>PERSONAL INTERESTS</h2>
            <ul>
                <li>Reading</li>
                <li>Online gaming</li>
                <li>Role-playing game</li>
                <li>Music</li>
            </ul>

        </main>
    )
}