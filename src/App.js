import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import {useEffect, useState} from "react";

function App() {
  return (
    <Router>
    <div>
      <Nav />
        <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/About" component={About} />
        <Route exact path = "/Resume" component={Resume} />
        <Route exact path = "/Portfolio" component={Portfolio} />
        <Route exact path = "/Contact" component={Contact} />
        </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
