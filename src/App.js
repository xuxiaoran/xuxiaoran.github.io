import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import TopNav from "./components/TopNav";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Collection from "./components/Collection";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopNav />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="collection" component={Collection} />
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
