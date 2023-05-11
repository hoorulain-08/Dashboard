
import Dashboard from "../Components/LegalEntity/Dashboard";

import Edit from "../Components/LegalEntity/Edit";
import board from "../assests/images/board.png";
import digital from "../assests/images/digital.png";
// import logout from "../assests/images/logout.svg";
import legal from "../assests/images/legal.svg";
// import DigitalCitizen from "../Components/Digital Citizen/digitalCitizen";
// import Verify from "../Components/LegalEntity/VerifyDocs";
import Email from "../Components/LegalEntity/Email";
import compose from "../assests/images/compose.png";
import charts from "../assests/images/charts.png";
import forums from "../assests/images/forums.png";
import Chart from "../Components/LegalEntity/charts";
import Forums from "../Components/LegalEntity/Forums";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
icon:board,
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/Email",
    name: "Email",
    icon:  digital,
    component:  Email,
    layout: "/admin",
  },

  {
    path: "/compose",
    name: "Compose",
    icon:compose,
    component:Edit,
    layout: "/admin",
  }
  ,
  {
    path: "/charts",
    name: "Charts",
    icon:charts,
    component:  Chart,
    layout: "/admin",
  },
   {
    path: "/Forums",
    name: "Forums",
    icon:forums,
    component:  Forums,
    layout: "/admin",
  },
];
export default routes;
