import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "../MiniCart/MiniCart";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">HomeHenri Potier's Library</Link>
      </h1>
      <MiniCart />
    </header>
  );
};
export default Header;
