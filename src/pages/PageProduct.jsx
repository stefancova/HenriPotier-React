import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MainContext from "../context/MainContext";

const PageProduct = () => {
  const { id } = useParams();
  const { products } = useContext(MainContext);
  const product = products.filter(product => product.isbn === id)[0];

  return (
    <>
      <h2>{product.title}</h2>
      <p>Page produit : {product.isbn}</p>
      <img src={product.cover} alt={product.title}></img>
      <p>{product.price}</p>
      {product.synopsis.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
      <Link to="/">Back to products list</Link>
    </>
  );
};
export default PageProduct;
