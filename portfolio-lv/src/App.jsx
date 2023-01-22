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
                        <h4 className="contact-title">Kontaktdaten</h4>
                        <ul className="contact-data">
                            <li>Wohnort: Berlin</li>
                            <li>Telefonnummer: +49 176 4151 8644</li>
                            <li>Email: volwahsenl@gmail.com</li>
                            <li>Github: Leo Volwahsen</li>
                        </ul>
                    </div>
                    <div className="skills-container">
                        <h4 className="skills-title">Kenntnisse</h4>
                    </div>
                </div>
                <div className="text"></div>
                <div className="projects"></div>
            </div>
            {/* <main className="main-container close">
                <div className="bg-image">
                    <h4 className="title">Fullstack Web Entwickler</h4>{" "}
                    <img
                        className="profile-img"
                        src="../src/assets/img/profilbild.jpg"
                        alt="profile-img"
                    ></img>
                  
                </div>

                <div className="txt">
                    <p>Fullstack Web Developer</p>
                    <p>I create React Websites </p>
                </div>
                <div className="projects">projekte</div>
            </main>
            <aside className="aside-container">
                <div className="profile-img"></div>
                <div className="contact-info"></div>
                <div className="skills"></div>
                <div className="contact-symbols"></div>
            </aside> */}
        </div>
    );
}

export default App;
