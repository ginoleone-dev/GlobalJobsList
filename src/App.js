import { Box } from "@mui/material";
import React from "react";

import { BrowserRouter as Route, Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/Header";

function App() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Outlet />
    </Box>
  );
}

export default App;
