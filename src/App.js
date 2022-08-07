import React from 'react';

import { BrowserRouter as Route, Outlet } from 'react-router-dom';
import ResponsiveAppBar from './components/Header';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}

export default App;
