import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/auth/Login';

//Theme files
import darkTheme from './config/theme/darkTheme';
import lightTheme from './config/theme/lightTheme';

import  ThemeProvider  from '@mui/material/styles/ThemeProvider';
import Overview from './views/app/Overview';
import FootFall from './views/app/FootFall';
import Groups from './views/app/Group';
import Deploy from './views/app/Deploy';
import Settings from './views/app/settings';
import Test from './views/Test'

import { CssBaseline } from '@mui/material';

function App() {
  const [dark, setdark] = useState(false)
  return (
    <ThemeProvider theme={dark?darkTheme:lightTheme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Overview />} />
          <Route path={"/app/overview"} element={<Overview />} />
          <Route path={"/app/footfall"} element={<FootFall />} />
          <Route path={"/app/group"} element={<Groups />} />
          <Route path={"/app/deploy"} element={<Deploy />} />
          <Route path={"/app/settings"} element={<Settings />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/test"} element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
