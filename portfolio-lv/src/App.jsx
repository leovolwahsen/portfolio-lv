import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="context-all close">
                <div className="info">
                    <div className="image-container">
                        <div className="profile-img"></div>
                        <h3 className="title">Fullstack Web Entwickler</h3>
                    </div>
                    <div className="contact-container">
                        <h5 className="contact-title">Kontaktdaten</h5>
                        <ul className="contact-data">
                            <li>Wohnort: Berlin</li>
                            <li>Telefonnummer: +49 176 4151 8644</li>
                            <li>Email: volwahsenl@gmail.com</li>
                            <li>Github: Leo Volwahsen</li>
                        </ul>
                    </div>

                    <div className="skills-container">
                        <h5 className="skills-title">Kenntnisse</h5>
                        <ul className="skills-data">
                            <li>JavaScript: </li>
                            <div className="skills-progressbar1">80%</div>
                            <li>React: </li>
                            <div className="skills-progressbar2">85%</div>
                            <li>MongoDB:</li>
                            <div className="skills-progressbar3">80%</div>
                            <li>NodeJS / Git:</li>
                            <div className="skills-progressbar4">75%</div>
                            <li>SCSS/CSS/HTML:</li>
                            <div className="skills-progressbar5">85%</div>
                        </ul>
                    </div>
                    <div className="language-container">
                        <h5 className="language-title">Sprachen</h5>
                        <div className="circular-progress">
                            <p className="progress-value">: Muttersprache</p>
                        </div>
                        <div className="circular-progress">
                            <p className="progress-value">Englisch: C1</p>
                        </div>
                    </div>
                </div>
                <div className="text"></div>
                <div className="projects"></div>
            </div>
        </div>
    );
}

export default App;
