import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "../MiniCart/MiniCart";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header is-relative">
      <h1 className="is-size-5-mobile is-size-2-tablet is-uppercase">
        <Link to="/" className="has-text-info">
          Henri Potier's Library
        </Link>
      </h1>
      <MiniCart />
    </header>
  );
};
export default Header;
