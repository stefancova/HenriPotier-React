import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./AddToCart.scss";

function AddToCart({ product }) {
  // Get updateCart from Context
  const { updateCart } = useContext(MainContext);

  // TODO : ici ou ailleurs ?
  const add = () => {};

  return (
    <button className="button" onClick={e => updateCart(product)}>
      Add to cart
    </button>
  );
}

export default AddToCart;
