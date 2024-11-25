import "./App.css";
import { FaLinkedin, FaGithub, FaXingSquare } from "react-icons/fa";

function App() {
    return (
        <div className="App">
            <div className="container-body">
                <div className="info">
                    <div className="image-container">
                        <div className="profile-img"></div>
                        <h4 className="title">Softwareentwickler</h4>
                    </div>
                    <div className="list-container">
                        <h5 className="list-title">Kontaktdaten</h5>
                        <ul className="list-data">
                            <li>Wohnort: Ludwigshafen am Rhein</li>
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
                                Dieser Apple Taschenrechner ist so konzipiert, dass man so viele Berechnungen machen kann wie man möchte. Er merkt sich auch die letzte Antwort und kann diese für die anschließende Rechnung benutzen.
                                <a
                                    href="https://apple-taschenrechner.netlify.app"
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
                            <h6 className="title">Elite Event Planners</h6>
                            <div className="cart">
                            Diese Elite Event Planners Website wurde mit einem kleinen Team, inklusive mir erstellt. Wir haben in dieser Full-Stack Anwendung eine interaktive Website erstellt, bei der man als Nutzer wie auch als Administrator unterschiedliche Funktionen nutzen kann.
                                <a
                                    href="https://event.ella-rotari.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    Elite Event Planners Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">Yoga Guide</h6>
                            <div className="cart">
                                Diese Yoga Guide Webseite wurde gepflegt mit Daten aus Datenbank MongoDB und ist responsiv, dazu gibt es feature wie dark/light-mode, toster messages und Anker-Links.
                                <a
                                    href="https://yoga-guide-2uteimbjf-01specter01s-projects.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    Yoga Guide Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">QR-Code Generator</h6>{" "}
                            <div className="cart">
                                Dieser QR-Code Generator ermöglicht es eine URL
                                in das Eingabefeld zu geben und einen QR-Code zu
                                bekommen, diese Anwendung war ein Bedürfnis, da
                                ich diese sehr praktisch finde und öfters nutze.{" "}
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
                        <article>
                            <h6 className="title">Interactive 3D-Kugel</h6>
                            <div className="cart">
                                Dieser 3D-Kugel wurde mit threejs programmiert und lässt den Nutzer mittels
                                 der Maus das Objekt drehen und gleichzeitig Farben wie auch Schatten beeinflussen.{" "}
                                <a
                                    href="https://3d-interactive-colorchanging-sphere.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    3D-Kugel Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">Elite Event Planners</h6>{" "}
                            <div className="cart">
                            Diese Elite Event Planners Website wurde mit einem kleinen Team, inklusive mir erstellt. Wir haben in dieser Full-Stack Anwendung eine interaktive Website erstellt, bei der man als Nutzer wie auch als Administrator unterschiedliche Funktionen nutzen kann.{" "}
                                <a
                                    href="https://event.ella-rotari.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    Elite Event Planners Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">KinoWebsite</h6>{" "}
                            <div className="cart">
                                Diese Website bietet eine Datenbank mit Aktuellen Kinofilmen wie auch alte Klassiker zum durchstöbern an. Die Anwendung ist eine auf React basierende mit Daten und Videomaterial der beliebigen Filme.{" "}
                                <a
                                    href="https://lv-beste-kinofilme.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <br />
                                    Interaktiver Kino-Film Link
                                </a>
                            </div>
                        </article>
                        <article>
                            {" "}
                            <h6 className="title">QR-Code Generator</h6>{" "}
                            <div className="cart">
                                Dieser QR-Code Generator ermöglicht es eine URL
                                in das Eingabefeld zu geben und einen QR-Code zu
                                bekommen, diese Anwendung war ein Bedürfnis, da
                                ich diese sehr praktisch finde und öfters nutze.{" "}
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
