import React from 'react';


export default function Footer(){
    return(
        <footer id="footer" className="hero column col-12 col-xs-12 container" style={{
            backgroundColor: "white",
            marginTop: "10px"
        }}>
            <div className="hero-body">
                <h1>Contact Info:</h1>
                <p><strong>GitHub:</strong><a href="https://github.com/novaaaax" target="_blank" rel="noopener noreferrer" className="github"> novaaaax</a> </p>
                <p><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/edwin-genova-409696117/" target="_blank" rel="noopener noreferrer"> Edwin Genova</a></p>
                <p><strong>Email:</strong><a href="mailto:edwingenova@gmail.com" target="_blank" rel="noopener noreferrer"> edwingenova@gmail.com</a></p>
            </div>

        </footer>
    );
}