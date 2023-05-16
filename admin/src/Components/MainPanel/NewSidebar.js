
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import logoad from "../../assests/images/logoad.svg";
import "../../assests/css/App.css";
import "../../assests/css/index.css";
import Sidebar from "./Sidebar";
import routes from "../../Routes/Routes";
import Routes1 from "../../Routes/Routes1.js";
import { Route, Switch, useLocation } from "react-router-dom";

var ps;

function NewSidebar(props) {
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return
     props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  

  return (
    <>
       <div className="wrapper">
     
     <Sidebar
       {...props}
       routes={routes}
    
     />
     {/* <Nav/> */}
     <div className="main-panel" >
       {/* <div id="logout">
         <DashboardProfile />
       </div> */}

       <Switch>
         {routes.map((prop, key) => {
           return (
             <Route
               path={prop.layout + prop.path}
               component={prop.component}
               key={key}
             />
             
           );
         })}


         {/* {Routes1.map((prop, key) => {
           return (
             <Route
               path={prop.layout + prop.path}
               component={prop.component}
               key={key}
             />
             
           );
         })} */}


       </Switch>
       {/* <Footer fluid /> */}
     </div>
    
   </div>
    </>
  );
}

export default NewSidebar;
