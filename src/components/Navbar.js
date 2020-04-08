import React from 'react';
import Resume from './SoftwareResume.pdf'

export default function Navbar(){
    return(
<header className="navbar container">
  <section className="navbar-section">
    <a href="#intro" className="btn btn-link">Intro</a>
    <a href="#projects" className="btn btn-link">Projects</a>
    <a href="#about" className="btn btn-link">About</a>
    <a href="#footer" className="btn btn-link" >Contact</a>
    <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn btn-link">Resume</a>
  </section>
</header>
    );
}