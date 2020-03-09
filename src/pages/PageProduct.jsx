import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AddTocart from "../components/AddToCart/AddToCart";
import MainContext from "../context/MainContext";
const PageProduct = () => {
  const { id } = useParams();
  const { products } = useContext(MainContext);
  const product = products.filter(product => product.isbn === id)[0];

  if (!product) return <p>LOADING ...</p>;
  return (
    <>
      <hr></hr>
      <div className="columns">
        <div className="column is-one-third-tablet">
          <img src={product.cover} alt={product.title}></img>
          <p className="has-text-weight-bold is-size-2">
            Prix : {product.price} €
          </p>
          <p>
            <AddTocart product={product} />
          </p>
          <p>Réf : {product.isbn}</p>
        </div>
        <div className="column tile">
          <h2 className="title">{product.title}</h2>
          {product.synopsis.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
      <p>
        <Link to="/">Back to products list</Link>
      </p>
    </>
  );
};
export default PageProduct;
