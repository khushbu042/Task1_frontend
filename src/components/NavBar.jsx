import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const linkStyle = {
    color: '#2575fc',
    fontSize: '16px',
    textDecoration: 'none',
    marginRight: '30px',
    fontWeight: 500
  };

  const activeStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold'
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: '#2575fc', fontWeight: 'bold' }}>
          Shivanski Technologies LLC
        </Typography>

        <Box>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
          >
            Home
          </NavLink>

          <NavLink
            to="/all"
            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
          >
            All Users
          </NavLink>

          <NavLink
            to="/add"
            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
          >
            Add User
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
