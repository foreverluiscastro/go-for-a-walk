import '../App.css';
import React, { useEffect, useState } from "react";
import { Router, Route } from "react-router-dom";
import Home from '../pages/Home';
import ClientApp from './ClientApp';
import WalkerApp from './WalkerApp';

function App() {
  const [session, setSession] = useState(null);
  
  useEffect(() => {
    // auto-login
    fetch("/session").then((r) => {
      if (r.ok) {
        r.json().then((session) => setSession(session));
      }
    });
  }, []);

  if (!session) return <Home/>

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/client-app" component={ClientApp} />
      <Route path="/walker-app" component={WalkerApp} />
    </Router>
  )
}

export default App;