import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./PrivateRoute.js"
import BubblePage from "./components/BubblePage.js"



function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/bubble-page"> Bubble Page</Link>
        </nav>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
