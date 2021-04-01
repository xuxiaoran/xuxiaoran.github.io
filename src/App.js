import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import TopNav from "./components/TopNav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Collection from "./components/Collection";
import Home from "./components/Home";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="container">
          <TopNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/collection" component={Collection} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
