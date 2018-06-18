import React, { } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Jumbotron from "./Components/Jumbotron"
import "./App.css"




const App = () =>
  <Router>
    <div>
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>;

export default App;
