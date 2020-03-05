import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import Product from "../Product/Product";
import Search from "../Search/Search";
import "./Products.scss";

const Products = () => {
  const { products, search } = useContext(MainContext);

  // TODO : Pourquoi getProducts est appellé automatiquement à chaque refresh du context
  const getProducts = () => {
    console.log("getProducts");
    return products
      .filter(product => {
        return product.title.toLowerCase().indexOf(search) !== -1;
      })
      .map(product => {
        return (
          <li className="column is-one-quarter" key={product.isbn}>
            <Product product={product} />
          </li>
        );
      });
  };

  return (
    <section>
      <Search />
      <ul className="products-list columns is-multiline">
        {products.length ? getProducts() : <p>LOADING...</p>}
      </ul>
    </section>
  );
};
export default Products;
