import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MainContext from "../context/MainContext";

const PageProduct = () => {
  const { id } = useParams();
  const { products } = useContext(MainContext);
  let product = {};

  //console.log("Products", products, product);
  product = products.filter(product => product.isbn === id);

  return (
    <>
      <h2>{product[0].title}</h2>
      <p>Page produit : {product[0].isbn}</p>
      <img src={product.cover} alt={product.title}></img>
      <Link to="/">Back to products list</Link>
    </>
  );
};
export default PageProduct;
