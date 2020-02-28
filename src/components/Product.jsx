import React, { useContext } from "react";
import MainContext from "../context/MainContext";

function Product({ product }) {
  //Get Context
  const context = useContext(MainContext);

  return (
    <li className="column is-one-quarter" key={product.id}>
      <h2 className="title is-6">{product.title}</h2>
      <img src={product.cover} alt={product.title}></img>
      <div className="columns">
        <p className="column">
          <strong className="title is-4">{product.price} €</strong>
        </p>
        <div className="column">
          <button
            className="button"
            onClick={e => context.updateCart(product.price)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
}

export default Product;