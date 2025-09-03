import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Brand from "./Components/Brand";
import Error from "./Components/Error";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router basename="/react-spa">
        <Menu />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/">
            Please select brand...
          </Route>
          <Route path="/:brand">
            <Brand />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
