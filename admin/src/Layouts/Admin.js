import React from "react";
// javascript plugin used to create scrollbars on windows
import { Route, Switch, useLocation } from "react-router-dom";

// import Footer from "../components/Footer/Foot
// import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";
import routes from "../Routes/Routes";
import NewSidebar from "../Components/LegalEntity/NewSidebar"
// import Header from "../components/UI/Header/Header";
var ps;

function  Admin(props) {
  const backcolor = "#043F97";
  const [backgroundColor, setBackgroundColor] = React.useState("white");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  const location = useLocation();

  return (
    <div className="wrapper">
     
      <NewSidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      {/* <Nav/> */}
      <div className="main-panel" >
        {/* <div id="logout">
          <DashboardProfile />
        </div> */}
        <div>
         
        
        </div>

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
  );
}

export default Admin;
