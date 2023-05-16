
import Dashboard from "../Components/MainPanel/Dashboard";

import Edit from "../Components/MainPanel/Edit";
import board from "../assests/images/board.png";
import digital from "../assests/images/digital.png";



import Email from "../Components/MainPanel/Email";
import compose from "../assests/images/compose.png";
import charts from "../assests/images/charts.png";
import forums from "../assests/images/forums.png";
import Chart from "../Components/MainPanel/charts";
import Forums from "../Components/MainPanel/Forums";
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
