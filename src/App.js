import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import { BrowserRouter as Route, Link, Router, Routes, Outlet} from "react-router-dom";


function App() {


return (
  <div>
    <Header/>
    <Outlet/>
  </div>
  )
}

export default App;

