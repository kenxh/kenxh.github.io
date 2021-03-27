import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "../pages/homePage";
import ToDoApp from "../pages/toDoApp";
import EndpointApp from "../pages/endpointApp";
import NotesApp from "../pages/notesApp";
import Navigation from "../Navigation"


const Header = () => (
  <header className="masthead">
    <div>
      <div>
        <Link to="/">
          <h1 className="site-title">Kendall's Website</h1>
        </Link>
        <Router>
          <div>
            <Navigation>
              <Route exact path="/" component={ToDoApp} />
              <Route exact path="/" component={EndpointApp} />
              <Route exact path="/" component={NotesApp} />
            </Navigation>
          </div>
        </Router>
      </div>
    </div>
  </header>
);

export default Header;
