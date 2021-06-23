import React from "react";
import { NavLink } from "react-router-dom";
import * as NavD from "../styles/nav";
import suncloud from "../../src/suncloud.png";

const Nav = () => {
  return (
    <>
      <NavD.NavWithFace>
        <NavD.NavButtons>
          <NavLink className="face-link" to="/">
            <img src={suncloud} className="logo" alt="log" />
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
