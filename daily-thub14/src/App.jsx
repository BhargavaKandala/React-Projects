import { useState } from 'react'
import './App.css'
import Home from './home.jsx';
import Services from './services.jsx';
import Contact from './contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFOUND from './PageNotFOUND.jsx';

function App() {
 return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFOUND />} />
          </Routes>
        </BrowserRouter>
      </>      
    );
}

export default App;