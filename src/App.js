import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Screens/Home'
import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
