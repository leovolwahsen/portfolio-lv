import "./App.css";
import { FaLinkedin, FaGithub, FaXingSquare } from "react-icons/fa";

function App() {
    return (
        <div className="App">
            <div className="container-body">
                <div className="info">
                    <div className="image-container">
                        <div className="profile-img"></div>
                        <h4 className="title">Fullstack Web Entwickler</h4>
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
                    <div className="projects">
                        <article>
                            <h6 className="title">Tachenrechner</h6>
                            <div className="cart">
                                Dieser Taschenrechner erm??glicht mathematische
                                Berechnungen zu l??sen, bei dieser Anwendung habe
                                ich mehr ??ber Design aber auch JavaScript Logik
                                gelernt.{" "}
                                <a
                                    href="https://lv001-react-calculator.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    Taschenrechner Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">Todo Liste</h6>{" "}
                            <div className="cart">
                                Diese To-do-Liste kann eingegebene Eintr??ge
                                erstellen und als abgeschlossen markieren. Diese
                                Website habe ich erstellt, um diese selber
                                nutzen zu k??nnen, um mich zu organisieren.{" "}
                                <a
                                    href="https://lv-001-todo-app.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    Todo Liste Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">Rennauto-Tachometer</h6>{" "}
                            <div className="cart">
                                Dieser interaktive Rennauto-Tachometer kann mit
                                den Tasten die Geschwindigkeit steuern, er wurde
                                mithilfe von React erstellt und wird ??ber
                                Netlify gehostet.{" "}
                                <a
                                    href="https://lv-react-car-speedometer.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    Interaktiver Tachometer Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">QR-Code Generator</h6>{" "}
                            <div className="cart">
                                Dieser QR-Code Generator erm??glicht es eine URL
                                in das Eingabefeld zu geben und einen QR-Code zu
                                bekommen, diese Anwendung war ein Bed??rfnis, da
                                ich diese sehr praktisch finde und ??fters nutze.{" "}
                                <a
                                    href="https://lv003-qr-generator.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    QR-Code Generator Link
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
