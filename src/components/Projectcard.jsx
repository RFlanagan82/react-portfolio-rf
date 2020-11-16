import React from 'react'
import cultourist from "../images/cultourist-main.png";
import burger from "../images/burger.png";
import roster from "../images/team.png";
import gameknight from "../images/gameknight_home.png";
import exercise from "../images/get_last_workout copy.png";
import readme from "../images/readme_generator.png";
import "../styles/Projectcard.css";

const images = {
    gameknight, cultourist, burger, roster, exercise, readme
}

function Projectcard(props) {
    return (
     <>
        <div className="card" style={{width: "18rem"}}>
            <img src={images[props.img]} className="card-img-top" alt={props.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Review</a>
            <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-dark">Github</a>
            </div>
      </div>
     </>
    )
}

export default Projectcard;