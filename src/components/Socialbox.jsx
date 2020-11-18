import React from 'react';
import github from "../images/github_icon.png";
import linkedin from "../images/linkedin.jpg";
import email from "../images/emailicon.png";

const images = {
    github, linkedin, email
}

const styles = {
    socialboxSize: {
        height: 90,
        width: 90
    },
    images: {
        height: "100%",
        width: "100%"
    }
}

function Socialbox(props) {
    return (
    <>
        <div style={styles.socialboxSize} className="flexbox-item">
        <a target="_blank" rel="noreferrer" href={props.url} >
        <img style={styles.images} src={images[props.img]} alt={props.alt}/>
        </a>
        </div>
    </>
    )
}

export default Socialbox;