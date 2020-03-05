import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./AddToCart.scss";

function AddToCart({ product }) {
  //Get Context
  const context = useContext(MainContext);

  // TODO : ici ou ailleurs ?
  const add = () => {};

  return (
    <button className="button" onClick={e => context.updateCart(product)}>
      Add to cart
    </button>
  );
}

export default AddToCart;
