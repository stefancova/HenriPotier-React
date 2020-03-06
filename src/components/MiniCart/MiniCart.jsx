import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./MiniCart.scss";

const MiniCart = () => {
  // Get cart from Context
  const { cart } = useContext(MainContext);

  return (
    <div style={{ border: "1px solid black" }}>
      <p>Cart {cart.totalPrice}</p>
    </div>
  );
};
export default MiniCart;
