import React from 'react';
import "../styles/Jumbotron.css";

function Jumbotron() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="container intro">
              <h1 className="display-3">Hello! &lt;My name is Ryan&gt;</h1>
              <p className="lead">
                I create digital experiences that delight and inspire.
              </p>
            </div>
          </div>
          <p className="skills">
            HTML5 | CSS3 | JavaScript | React.js | jQuery | MySQL | MongoDB |
            Node.js | Express.js
          </p>
        </div>
      </>
    );
}

export default Jumbotron;