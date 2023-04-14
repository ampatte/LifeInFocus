import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Media from "../Media/Media.js";
import "../../global-styles/global.css";

function Header() {
  return (
    <header className="header">
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/login">
        |Login
      </NavLink>
      LifeInFocus
      <Media className="player" />
    </header>
  );
}
export default Header;
