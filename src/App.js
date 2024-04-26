import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Edit from './components/Edit';
import TopBar from './components/TopBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />  {/* This is for baseline CSS of MUI to normalize the styles across browsers */}
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          {/* Add more routes as necessary */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
