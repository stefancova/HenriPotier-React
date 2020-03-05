import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../context/MainContext";
import "./Product.scss";

function Product({ product }) {
  //Get Context
  const context = useContext(MainContext);

  return (
    <Link to={`/product/${product.isbn}`}>
      <h2 className="title is-6">{product.title}</h2>
      <img src={product.cover} alt={product.title}></img>
      <div className="columns">
        <p className="column">
          <strong className="title is-4">{product.price} €</strong>
        </p>
        <div className="column">
          <button className="button" onClick={e => context.addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
