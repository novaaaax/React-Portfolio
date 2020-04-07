import React from 'react';

export default function Navbar(){
    return(
        <nav style={{
            backgroundColor: "black",
            textAlign: "center"
        }}>
            <button>Intro</button>
            <button>Projects</button>
            <button>About</button>
            <button>Contact</button>
            <button>My Resume</button>
        </nav>
    );
}