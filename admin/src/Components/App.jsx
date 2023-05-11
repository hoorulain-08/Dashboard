import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './Sidebar';
// import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles, Typography } from '@material-ui/core'
// import pic from "./pic.jpg";

const App = () => (
  <div className="container">
  <StyledEngineProvider injectFirst>
      <Demo />
  </StyledEngineProvider>
 {/* <Header/> */}
{/* <div style={{marginTop:"10px",marginBottom:"10px"}}>Home page content </div>
<Footer /> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
