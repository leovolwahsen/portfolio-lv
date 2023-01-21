import "./App.css";

function App() {
    return (
        <div className="App">
            <main className="main-container">
                <div className="bg-image">
                    <img
                        className="bg-image1"
                        src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
                        alt="image of code"
                    ></img>
                </div>

                <div className="txt">
                    <p>Fullstack Web Developer</p>
                    <p>I create React Websites </p>
                </div>
                <div className="projects">projekte</div>
            </main>
            <aside className="aside-container">
                <div className=""></div>
            </aside>
        </div>
    );
}

export default App;
