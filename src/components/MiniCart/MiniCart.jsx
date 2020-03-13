import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";
import "./MiniCart.scss";

const MiniCart = () => {
  // Get cart from Context
  const { cartTotal, cartDiscount } = useContext(MainContext);

  return (
    <Link to="/cart" className="minicart">
      <p>{cartTotal - cartDiscount} €</p>
      <p></p>
    </Link>
  );
};
export default MiniCart;
