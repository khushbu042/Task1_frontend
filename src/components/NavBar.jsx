import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  /* css*/
  const appbar = {
    backgroundColor: "#9370DB",
    height:"60px",  
  };
  const tag = {
     color: "#fff",
     fontSize:"15px",
     padding: "0px 30px 0px 0px",
     textDecoration: "none"
  };
  
  return (
    <>
        <AppBar style={appbar} position='static'>
            <Toolbar>
            <NavLink to="/" style={tag} >Shivanski Technologies LLC</NavLink >
            <NavLink to="/all"  style={tag}>All Users</NavLink >
            <NavLink to="/add" style={tag}>Add User</NavLink >
            </Toolbar>
        </AppBar>
    </>
  )
}

export default NavBar
