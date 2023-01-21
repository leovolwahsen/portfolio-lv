import "./App.css";

function App() {
    return (
        <div className="App">
            <main className="main-container">
                <div className="bg-image">
                    <img
                        className="bg-image1"
                        src="../src/assets/img/code.jpg"
                        alt="code image"
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
            </aside>
        </div>
    );
}

export default App;
