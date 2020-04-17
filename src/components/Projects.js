import React from 'react';
import project1 from './project1.jpeg'
import project2screenshot from './project2screenshot.jpeg'
import example from './example.jpeg'
import readmescreenshot from './readmescreenshot.jpeg'
import solve from './solve.png'


export default function Projects() {
    return (
        <div id="projects">
            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Soundtrack That Movie!</div>
                    </div>
                    <div className="card-body">
                        This application allows users to search for songs/soundtracks of their favorite movies and TV shows.
                     </div>
                    <div className="card-image">
                        <img src={project1} className="img-responsive" alt="project one" />
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/novaaaax/soundtrack-that-movie" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repo</a>
                        <a href="https://novaaaax.github.io/soundtrack-that-movie/" target="_blank" rel="noopener noreferrer" style={{
                            paddingLeft: "5px"
                        }}>Deployed Link</a>

                    </div>
                </div>
            </div>
            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Car Amplify</div>
                    </div>
                    <div className="card-body">
                        This application allows users to get information about a wide selection of cars using our database and a third party API.
                     </div>
                    <div className="card-image">
                        <img src={project2screenshot} className="img-responsive" alt="project two" />
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/novaaaax/Car_amplify" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repo</a>
                        <a href="https://car-amplify.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{
                            paddingLeft: "5px"
                        }}>Deployed Link</a>

                    </div>
                </div>
            </div>
            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Employee Database</div>
                    </div>
                    <div className="card-body">
                        This software allows users to generate a database and keep track of important employee information, like name, department and more. A great way to store and organize data. (No deployed link, it's a command line tool).
                        </div>
                    <div className="card-image">
                        <img src={example} className="img-responsive" alt="project two" />
                    </div>
                    <div className="card-footer">
                        <a href="https://car-amplify.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repo</a>
                    </div>
                </div>
            </div>
            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Readme Generator</div>
                    </div>
                    <div className="card-body">
                        This software allows users to easily generate a basic outline for a readme which they can then customize to fit whatever project their working on. I personally find this to be super useful and it saves me a lot of time! (No deployed link, it's a command line tool).
                        </div>
                    <div className="card-image">
                        <img src={readmescreenshot} className="img-responsive" alt="project two" />
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/novaaaax/readme-generator" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repo</a>
                    </div>
                </div>
            </div>
            <div id="cards" className="column col-6 col-xs-12">
                <div className="card" style={{
                    marginTop: "10px",
                    borderRadius: "25px"
                }}>
                    <div className="card-header">
                        <div className="card-title h5">Solve Staking</div>
                    </div>
                    <div className="card-body">
                        The purpose of the website is to educate people on decentralization, open source systems and crypo currency. Currently this is purely an educational website but in the near future we will offer our own staking pool service.
                        </div>
                    <div className="card-image">
                        <img src={solve} className="img-responsive" alt="solve staking" />
                    </div>
                    <div className="card-footer">
                        <a href="https://github.com/novaaaax/honey.stake" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Repo</a>
                        <a href="https://solvestaking.herokuapp.com/" target="_blank" rel="noopener noreferrer" style={{
                            paddingLeft: "5px"
                        }}>Deployed Link</a>
                    </div>
                </div>
            </div>

        </div>
    );
}