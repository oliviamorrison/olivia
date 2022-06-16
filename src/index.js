import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Components/Home';
import Now from './Components/Now/Now';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="now" element={<Now />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);