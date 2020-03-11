import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import "./AddToCart.scss";

function AddToCart({ product }) {
  // Get addToCart from Context
  const { addToCart } = useContext(MainContext);

  return (
    <button
      className="button button is-primary"
      onClick={() => addToCart(product)}
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
