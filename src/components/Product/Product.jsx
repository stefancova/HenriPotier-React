import React from "react";
import { Link } from "react-router-dom";
import AddTocart from "../AddToCart/AddToCart";
import "./Product.scss";

function Product({ product }) {
  return (
    <>
      <Link to={`/product/${product.isbn}`}>
        <h2 className="product-title title is-6">{product.title}</h2>
        <img src={product.cover} alt={product.title}></img>
      </Link>
      <div className="columns">
        <p className="column">
          <strong className="title is-4">{product.price} €</strong>
        </p>
        <div className="column">
          <AddTocart product={product} />
        </div>
      </div>
    </>
  );
}

export default Product;
