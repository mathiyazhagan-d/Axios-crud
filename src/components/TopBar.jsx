import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button component={Link} to="/" color="inherit">Dashboard</Button>
        <Button component={Link} to="/create" color="inherit">Create</Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
