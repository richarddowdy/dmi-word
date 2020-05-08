import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/index';
import StyledLink from '../../components/StyledLink/index';

function NavBar() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div style={{margin: "10px auto"}} className="text-light">
        <StyledLink to="/" ><i className="mr-2 fas fa-home"></i>Home</StyledLink>
        <StyledLink to="/new" ><i className="mr-2 fas fa-sticky-note"></i>Form</StyledLink>

      </div>
    </div>
  );
}

export default NavBar;
