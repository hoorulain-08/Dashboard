import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";

// import "./src/assests/css/index.css";
import "./assests/css/App.css";

import Admin from "./Components/LegalEntity/NewSidebar"
// console.log("at the entrance of admindashbaord")
ReactDOM.render(
  
  <div className="container">
  {/* <StyledEngineProvider injectFirst>
      <Sidebar />
  </StyledEngineProvider> */}


  
 <Router>

      <Switch>
        <Route path="/admin" render={(props) => <Admin {...props} />} />
        <Redirect to="/admin/dashboard" />

      </Switch>

    </Router>
   
  </div>
  
  
  
  
  
  , document.getElementById("root"));
