import { AppBar, makeStyles, Toolbar, Button, Typography } from "@material-ui/core";
import logo from './logo1.jpg'
import React from "react";
import About from './About'

import Home from "./Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({

  
  typographystyles: {
    
    height:14,
    cursor: "pointer",
    fontWeight: 500,
    textDecoration:"none"
  },

  
  buttonstyles: {
    color: "black",
    fullWidth: false,
    left: '68vw',
    marginTop:"-10px"
    
  },
  appbarstyles: {
    backgroundColor: "white",
    boxShadow: "none",
    position:"relative",
    height: 100,
    hyphens:" manual"
  },
  logo: {
    marginTop:5,
    height:42,
    width:150
  }
}));

const Navbar = () => {
  const classes = useStyles();
  
  return (
    <div>
    <AppBar
    className={classes.appbarstyles}>
      <Toolbar>
      <Link  to="/">
      <img src={logo} alt="logo" className={classes.logo} ></img>
      </Link>
       
      <Link className ={classes.typographystyles} to="/about">
      <Button className={classes.buttonstyles}  >
        
        <Typography className={classes.typographystyles}>     
          ABOUT US</Typography></Button>
      </Link>
      <Link className ={classes.typographystyles} to="/about">
        <Button className={classes.buttonstyles}>
        <Typography className={classes.typographystyles}>LOG IN</Typography ></Button></Link>
      </Toolbar>
    </AppBar>
    
    </div>
  );
};

export default Navbar;
