import React from "react";
import MiniCart from "../MiniCart/MiniCart";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1>Henri Potier's Library</h1>
      <MiniCart />
    </header>
  );
};
export default Header;
