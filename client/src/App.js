import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.scss';

import UsersList from "./pages/UsersList";
import Home from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/js/bootstrap.js';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar top-0 border-bottom z-index-3">
          <div className="container-fluid">
            <a className="navbar-brand font-weight-bolder ms-3" href="" rel="tooltip" title="Designed and Coded by Lovely Bomji" data-placement="bottom" target="_blank">
              <img src="logo.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
              React + Bootstrap
            </a>
            <div>
              <ul className="navbar-nav navbar-nav-hover mx-auto d-inline-block">
                <li className="nav-item px-3 d-inline-block">
                  <a className="nav-link" href="/"><i className="bi-house"></i>Home</a>
                </li>
                <li className="nav-item px-3 d-inline-block">
                  <Link className="nav-link" to={"/Users"}><i className="bi-people"></i>Users</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UsersList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
