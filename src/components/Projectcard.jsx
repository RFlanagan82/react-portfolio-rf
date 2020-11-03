import React from 'react'
import cultourist from "./cultourist-main.png";
import burger from "./burger.png";
import roster from "./team.png";
import workdayscheduler from "./scheduler.png";
import exercise from "./get_last_workout_copy.png";
import readme from "./readme_generator";

const images = {
    cultourist, burger, roster, workdayscheduler, exercise, readme
}

function Projectcard(props) {
    return (
     <>
        <div className="card" style="width: 18rem;">
            <img src={images[props.img]} className="card-img-top" alt={props.alt} />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.url} className="btn btn-dark">Review</a>
            <a href={props.github}>Github</a>
            </div>
      </div>
     </>
    )
}

export default Projectcard;