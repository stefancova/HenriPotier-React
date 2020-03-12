import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddTocart from "../components/AddToCart/AddToCart";
import MainContext from "../context/MainContext";
const PageProduct = () => {
  let nbParagraph = 1;
  const { id } = useParams();
  const { products } = useContext(MainContext);
  const product = products.filter(product => product.isbn === id)[0];
  const [hidden, setHidden] = useState(true);

  const getSynopsis = () => {
    hidden ? (nbParagraph = 1) : (nbParagraph = product.synopsis.length);
    let description = product.synopsis.slice(0, nbParagraph).map((item, i) => {
      return <p key={i}>{hidden ? (item += "...") : item}</p>;
    });
    return description;
  };

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
            <div className="synopsis">
              {getSynopsis()}
              <button className="btn-show" onClick={() => setHidden(!hidden)}>
                {hidden ? "Show more" : "Show less"}
              </button>
            </div>
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
