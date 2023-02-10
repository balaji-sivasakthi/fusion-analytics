import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './views/app/Dashboard';
import Login from './views/auth/Login';

//Theme files
import darkTheme from './config/theme/darkTheme';
import lightTheme from './config/theme/lightTheme';

import  ThemeProvider  from '@mui/material/styles/ThemeProvider';
function App() {
  const [dark, setdark] = useState(false)
  return (
    <ThemeProvider theme={dark?darkTheme:lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
