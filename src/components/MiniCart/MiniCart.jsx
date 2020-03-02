import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./MiniCart.scss";

const MiniCart = () => {
  const mainContext = useContext(MainContext);

  return (
    <div style={{ border: "1px solid black" }}>
      <p>Cart {mainContext.cart}</p>
    </div>
  );
};
export default MiniCart;
