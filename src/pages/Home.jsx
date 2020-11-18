import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Socialbox from '../components/Socialbox';
import socialboxjson from "../components/social.json";
import "../styles/Socialbox.css";

function Home() {
    return (
        <>
        <Jumbotron />
        <div className="flexbox-container socialbox">
            {socialboxjson.map(box => (
                <Socialbox {...box}
                key={box.id} 
                />
            ))}
        </div>
        </>
    )
}

export default Home;