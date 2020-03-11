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
      <hr />
      <div className="box">
        <div className="columns ">
          <div className="column is-one-third-tablet">
            <figure className="image">
              <img src={product.cover} alt={product.title}></img>
            </figure>
            <p className="has-text-weight-bold is-size-3">
              Prix : {product.price} €
            </p>
            <p>
              <AddTocart product={product} />
            </p>
          </div>
          <div className="column tile">
            <h2 className="title">{product.title}</h2>
            {product.synopsis.map((item, i) => {
              return <p key={i}>{item}</p>;
            })}
          </div>
        </div>
        <p>
          <Link to="/">&laquo; Back to products list</Link>
        </p>
      </div>
    </>
  );
};
export default PageProduct;
