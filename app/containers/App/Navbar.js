import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/index';
import StyledLink from '../../components/StyledLink/index';

function NavBar() {
  return (
    <div className="navbar navbar-dark bg-primary">
      <div style={{margin: "10px auto"}} className="text-light">
        <NavLink to="/" className="d-inline btn btn-dark" style={{ fontSize: "20px", margin: "10px"}}>Home</NavLink>
        <NavLink to="/new" className="d-inline btn btn-dark" style={{ fontSize: "20px", margin: "10px" }}>Form</NavLink>
        <StyledLink to="/new" >Form</StyledLink>

      </div>
    </div>
  );
}

export default NavBar;
