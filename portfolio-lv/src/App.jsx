import "./App.css";
import { FaLinkedin, FaGithub, FaXingSquare } from "react-icons/fa";

function App() {
    return (
        <div className="App">
            <div className="context-all close">
                <div className="info">
                    <div className="image-container">
                        <div className="profile-img"></div>
                        <h3 className="title">Fullstack Web Entwickler</h3>
                    </div>
                    <div className="list-container">
                        <h5 className="list-title">Kontaktdaten</h5>
                        <ul className="list-data">
                            <li>Wohnort: Berlin</li>
                            <li>Telefonnummer: +49 176 4151 8644</li>
                            <li>Email: volwahsenl@gmail.com</li>
                            <li>Github: Leo Volwahsen</li>
                        </ul>
                    </div>

                    <div className="skills-container">
                        <h5 className="skills-title">Kenntnisse</h5>
                        <ul className="skills-data">
                            <li>JavaScript / TypeScript: </li>
                            <div className="skills-progressbar1">80%</div>
                            <li>React: </li>
                            <div className="skills-progressbar2">85%</div>
                            <li>MongoDB:</li>
                            <div className="skills-progressbar3">60%</div>
                            <li>NodeJS / Git:</li>
                            <div className="skills-progressbar4">75%</div>
                            <li>SCSS/CSS/HTML:</li>
                            <div className="skills-progressbar5">85%</div>
                        </ul>
                    </div>
                    <div className="list-container">
                        <h5 className="list-title">Sprachen</h5>
                        <ul className="list-data">
                            <li>Deutsch: Muttersprache</li>
                            <li>Englisch: C1</li>
                        </ul>{" "}
                        <div className="icons">
                            <a
                                className="icons1"
                                href="http://www.linkedin.com/in/leo-volwahsen"
                                target="_blank"
                            >
                                <FaLinkedin className="icons1" />
                            </a>
                            <a
                                className="icons2"
                                href="https://github.com/leovolwahsen"
                                target="_blank"
                            >
                                <FaGithub className="icons2" />
                            </a>

                            <a
                                className="icons3"
                                href="https://www.xing.com/profile/Leo_Volwahsen2/cv"
                                target="_blank"
                            >
                                <FaXingSquare className="icons3" />
                            </a>
                        </div>
                    </div>
                </div>{" "}
                <div className="main">
                    <div className="image-container">
                        <span className="bg"></span>
                    </div>
                    <h5 className="header">Bisherige Projekte</h5>
                </div>
                <div className="projects"></div>
            </div>
        </div>
    );
}

export default App;
