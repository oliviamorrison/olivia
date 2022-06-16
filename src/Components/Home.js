import React from 'react';
import { Link } from "react-router-dom";

import "./Home.css"

function App() {

  const header = (
    <div className="header">
      <span className="primary">olivia morrison</span>
      <span className="secondary">my mothers daughter</span>
    </div>
  )

  const nav = (
    <ul className="nav">
      <li><Link to="now">now</Link></li>
      <li><a href="#playground">payground</a></li>
    </ul>
  )

  return (
    <div className="body">
      {header}
      {nav}
    </div>
  );
}

export default App;
