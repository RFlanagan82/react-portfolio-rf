import React from 'react';
import "../styles/About.css";
import picture from "../images/picture.jpg"

function About() {
    return (
    <>
    <div className="flexbox-container aboutme" style={{display: "inline-block"}}>
        <div className="flexbox-item" id="ryanpic">
        <img src={picture} className={"ryanpic"} alt="ryanpic" />
    </div>
    <div className="flexbox-item-aboutcopy" style={{display: "inline-block"}}>
        <div className="aboutmecontent">
          <h3 className="About">My Story</h3>
            <hr />
                <p>I'm a full-stack engineer from Smyrna, Georgia - leveraging product, marketing, and tech-startup entrepreneurship experience to create digital experiences that delight and inspire.</p>
                <p>As a graduate of the Georgia Tech Full-Stack Coding Bootcamp, Fall 2020 cohort; I have an array of technical skills to include: HTML, CSS, JavaScript, jQuery, Node.js, AJAX, MySQL, Express-Handlebars, React.js, Mongo, and JSON.
                </p>
                <p>Peers agree that I have a real knack for understanding complex concepts and seeing through to the root of an issue. In each new application, I invest myself fully to writing clean and understandable code with a focus on the clients’ side usability and UI.
                </p>
                <p>I've utilized my skills as a member of a high-powered development team to create a user-seeding travel resource app called CulTourist. It integrates custom helpers using Express-Handlebars, full CRUD Routes, is supported by a custom built JAWSDB database with MySQL and Sequelize ORM, and pulls in 3rd party API data from RESTCountries.Eu. 
                  
                We've also created a dynamic game scheduling full stack app called Game Knight, which is a full-stack MERN application that incorporates JSON web tokens for authentication, multiple npm packages such as: bcrypt, REACT - Slick, REACT - Datepicker, and REACT - Bootstrap.
                
                I am ready to put my powerful blend of soft and technical skills to use as part of a value driven, innovative, web-development team.
                </p>
                <p>When I'm not coding, you'll find me spending time running after my 3 year old son, making silly faces for my 7 month old daughter, or having a glass of wine with my wife.</p>
                <p>Let's connect and have a conversation. </p>
          <h2> - Ryan</h2>
        </div>
      </div>
    </div>
        </>
    )
}

export default About;