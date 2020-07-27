import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import Weather from "./components/weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/mmm" component={Weather} />
        </Router>
      </header>
    </div>
  );
}

export default App;
