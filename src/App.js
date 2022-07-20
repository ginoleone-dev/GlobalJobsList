import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import { BrowserRouter as Route, Link, Router, Routes, Outlet} from "react-router-dom";
import ResponsiveAppBar from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


return (
  <div>
    <ResponsiveAppBar/>
    <Outlet/>
  </div>
  )
}

export default App;

