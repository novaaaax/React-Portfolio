import React from 'react';
import project1 from './project1.jpeg'


export default function Projects() {
    return (
        <div className="column col-6 col-xs-12">
        <div class="card" style={{
            marginTop: "10px"
        }}>
            <div class="card-header">
                <div class="card-title h5">Soundtrack That Movie!</div>
            </div>
            <div class="card-body">
            This application allows users to search for songs/soundtracks of their favorite movies and TV shows.
                     </div>
            <div class="card-image">
                <img src={project1} class="img-responsive" alt="project one" />
            </div>
            <div class="card-footer">
                <button href="" class="btn btn-primary">Repo</button>
            </div>
        </div>
        </div>
    );
}