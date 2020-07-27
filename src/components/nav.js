import React from "react";
import { NavLink } from "react-router-dom";
import * as NavD from "../styles/nav";
import scpLogo from "../../src/scplogo.png";

const Nav = () => {
  return (
    <>
      <NavD.NavWithFace>
        <NavD.NavButtons>
          <NavLink className="face-link" to="/">
            <img src={scpLogo} className="scp-logo" alt="log" />
          </NavLink>
          <NavD.NavContainer>
            <NavLink className="nav-link" to="/mmm">
              Local Weather
            </NavLink>
          </NavD.NavContainer>
        </NavD.NavButtons>
      </NavD.NavWithFace>
    </>
  );
};

export default Nav;
