import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Main from './components/Main';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
         <Route
            index 
            element={<Main />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>  
);


