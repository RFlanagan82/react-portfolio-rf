import React from 'react';
import Projectcard from "./components/Projectcard";
import projectjson from "./components/project.json";

function Portfolio() {
    return (
        <div className="container portfoliobox">
            <div className="row">
                {projectjson.map(card => (
                    <Projectcard {...card} />>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;