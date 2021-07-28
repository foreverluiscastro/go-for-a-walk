import '../App.css';
import React from "react";
import { Router, Route } from "react-router-dom";
import Home from '../pages/Home';
import ClientApp from './ClientApp';
import WalkerApp from './WalkerApp';

const App = () => {
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/owner-app" component={ClientApp} />
      <Route path="/walker-app" component={WalkerApp} />
  </Router>
}

export default App;