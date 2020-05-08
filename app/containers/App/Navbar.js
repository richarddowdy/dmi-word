import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <div style={{margin: "auto"}} className="text-light">
        <NavLink to="/" style={{margin: "10px"}}>Home</NavLink>
        <NavLink to="/new" style={{ margin: "10px" }}>Form</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
