import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <div style={{textAlign: 'center'}} className="text-light">
        <NavLink to="/" style={{marginRight: '15px'}}>Map</NavLink>
        <NavLink to="/new" style={{marginRight: '15px'}}>Form</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
