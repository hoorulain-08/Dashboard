import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./assests/css/App.css";

import Admin from "./Components/MainPanel/NewSidebar"
// console.log("at the entrance of admindashbaord")
ReactDOM.render(
  
  <div className="container">

 <Router>

      <Switch>
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Redirect to="/admin/dashboard" />

      </Switch>

    </Router>
   
  </div>

  , document.getElementById("root"));
