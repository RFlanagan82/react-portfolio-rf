import React from 'react';
import Projectcard from "../components/Projectcard";
import projectjson from "../components/project.json";
import "../styles/Portfolio.css";

function Portfolio() {
    return (
        <div className="container portfoliobox">
            <div className="row">
                {projectjson.map(card => (
                    <Projectcard {...card}
                    key={card.id} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;