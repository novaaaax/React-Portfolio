import React from 'react';


export default function Intro(){
    return(
        <div id="intro">
        <div style={{
            backgroundColor: "white",
            color: "#3b4351",
            marginTop: "",
            borderRadius: "25px"
        }} className="hero column col-11 col-xs-12 container">
            <div className="hero-body">
                <h1>Welcome!</h1>
                <p>This is my portfolio, I created it mainly with React, Node.js and the Spectre.css framework. Here you'll be able to see some projects that I'm proud of (deployed link's and repo's), check out my resume and learn about it me. Hope you enjoy, thanks for visiting!</p>
            </div>
        </div>
        </div>
    );
}