
function Home(){
    return(
        <body>
            <main className="Home_body_main">
                <div className="Home_body_top">
                    <img src="/Neighborhood_icon(2).jpg" alt="Logo" className="Home_body_logo" id="logo"/>
                </div>
                <div className="Intro">
                    <h1 className="Text1">Welcome to The Neighborhood</h1>
                    <h3 className="Text2">Your go-to app for finding the nearest ATMs and banks</h3>
                    <p className="Text3">No long lines, no wasted time. Just quick access to your financial needs.</p>
                </div>
                <div className="columns">
                    <a href="./Features.jsx">
                        <div className="column">
                            <div id="card">
                                <img id="img" src="/map2.jpg" ></img>
                            </div>
                            <div id="card">Features</div>
                        </div>
                    </a>
                    <a href="./Background.jsx">
                        <div className="column">
                            <div id="card">
                                <img id="img" src="/Atm_img.png"></img>
                            </div>
                            <div id="card">App Background</div>
                        </div>
                    </a>
                    <a href="./About.jsx">
                        <div className="column">
                            <div id="card">
                                <img id="img" src="/team_img.png"></img>
                            </div>
                            <div id="card">Team Info</div>
                        </div>
                    </a>
                </div>
            </main>
        </body>
    );
} 
export default Home;