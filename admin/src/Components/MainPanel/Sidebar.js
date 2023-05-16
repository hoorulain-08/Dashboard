import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import mark from "../../assests/images/mark.png"

import ListItemText from "@mui/material/ListItemText";
// import DigitalCitizen from "../Digital Citizen/digitalCitizen";
// import Header from './Header';
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";


import { Search } from "./Searchbar";

// import Dashbord from "./Dashboard";
// import Table from "./Table";
// import ColumnsGrid from "./VerifyDocs";

import "../../assests/css/App.css";
import { useState } from "react";
// import NewBusiness from "./NewBusiness";
const drawerWidth = 240;

export default function Sidebar(props) {

  const [route1 ,setRoute1]=useState(false);
  const [route2 ,setRoute2]=useState(false);
  const [route3 ,setRoute3]=useState(false);
  const [route4 ,setRoute4]=useState(false);

  function handleRoute2()
  {
    setRoute2(true)
  }

  function handleRoute3()
  {  setRoute3(true);
    setRoute2(false);
  
  }

  function handleRoute4()
  {  setRoute3(false);
    setRoute2(false);
    setRoute4(true)
  
  }


  console.log("in the sidebar of admin dashboard")
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          {/* <Header /> */}
          <Search />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="admin-sidebar-img-pos">
   
          <img src={mark} width={90} height={85} />
        </div>
        <div className="admin-sidebar-heading">Administrator</div>
        <br/>

        {/* <Nav> */}
          {props.routes.map((prop, key) => {
            return (
              
                <NavLink to={prop.layout + prop.path} style={{textDecoration:"none"}}>
                <List className="sidebar-list">
         
         <ListItem>
          <span className="board-pos"> 
          <img src={prop.icon} className="icon-size"/>
       
          <span className="side-head-pos">{prop.name}</span>
           </span>
       
         </ListItem>
   
       <Divider  variant="fullWidth"/>

       </List>
           
                </NavLink>
             
            );
          })}
        {/* </Nav> */}


      
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#607d8b0f", p: 3 }}>
      {/* <NewBusiness/> */}
{/* 
  <Dashbord/> */}
  
  {/* hello world */}

        
      </Box>
    </Box>
  );
}
