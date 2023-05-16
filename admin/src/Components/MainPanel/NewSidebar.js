
import React from "react";

// javascript plugin used to create scrollbars on windows
import "../../assests/css/App.css";
import "../../assests/css/index.css";
import Sidebar from "./Sidebar";
import routes from "../../Routes/Routes";
import { Route, Switch} from "react-router-dom";



function NewSidebar(props) {
  const sidebar = React.useRef();
 
  const activeRoute = (routeName) => {
    return

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
       </Switch>
       {/* <Footer fluid /> */}
     </div>
    
   </div>
    </>
  );
}

export default NewSidebar;
