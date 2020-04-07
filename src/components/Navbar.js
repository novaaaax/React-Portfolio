import React from 'react';

export default function Navbar(){
    return(
<header className="navbar container">
  <section className="navbar-section">
    <a href="#intro" className="navbar-brand mr-2">Intro</a>
    <a href="#projects" className="btn btn-link">Projects</a>
    <a href="#about" className="btn btn-link">GitHub</a>
  </section>
</header>
    );
}