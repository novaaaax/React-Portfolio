import React from 'react';


export default function About() {
    return (
        <div>
            <div id="about">
                <div style={{
                    backgroundColor: "white",
                    color: "#3b4351",
                    marginTop: "10px",
                    borderRadius: "25px"
                }} className="hero column col-11 col-xs-12 container">
                    <div className="hero-body">
                        <h1>A bit about me:</h1>
                        <p>I live in Philadelphia, PA. Some of my hobbies include video games, cars and astronomy. My passion is software development! Currently I'm skilled in HTML, CSS, JavaScript, Node.js, React, MySQL, and MongoDB. Another language I'm super interested in learing is Python. As stated above, I'm currently studying full stack development at UPENN, but I'm also still searching for opportunities and experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}