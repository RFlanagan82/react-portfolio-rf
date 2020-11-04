import React from 'react';
import "../styles/Contact.css";
import Socialbox from '../components/Socialbox';
import socialboxjson from "../components/social.json";
import "../styles/Socialbox.css";


function Contact() {
    return (
        <>
        <div className="flexbox-container contactform">
            <div className="card">
              <div className="card-body card-body-style">
                <h1 className="card-title">Contact</h1>
                
                <div className="image-paragraph-divider">
                  
                  <form id="my-form"action="https://formspree.io/f/mbjpgrrj" method="POST" >

                    <div className="form-group">
                      <label HTMLfor="Name">Name</label>
                      <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                    </div>

                    <div className="form-group">
                      <label HTMLfor="Email">Email</label>
                      <input type="email" className="form-control" name="_replyto" id="email" placeholder="Email" />
                    </div>

                    <div className="form-group">
                      <label HTMLfor="Message">Message</label>
                      <textarea className="form-control" id="message" name="message" rows="3" placeholder="Message"></textarea>
                    </div>

                    <input className="btn btn-primary button" type="submit" id="submit" value="Submit" />
                  </form>
                </div>

              </div>
            </div>
        </div> 
        <div className="flexbox-container socialbox">
            {socialboxjson.map(box => (
                <Socialbox {...box} />
            ))}
        </div>
        </>
    )
}

export default Contact;