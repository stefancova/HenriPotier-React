import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import Product from "../Product/Product";
import Search from "../Search/Search";
import "./Products.scss";

const Products = () => {
  const [data, setData] = useState({ products: [] });
  const context = useContext(MainContext);

  // FetchData
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://henri-potier.xebia.fr/books");
      setData(result.data);
      console.log("result", result.data);
    };
    fetchData();
  }, []);

  // TODO : Pourquoi getProducts est appellé automatiquement à chaque refresh du context
  const getProducts = () => {
    console.log("getProducts");
    return data
      .filter(product => {
        return product.title.toLowerCase().indexOf(context.search) !== -1;
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
        {data.length ? getProducts() : <p>LOADING...</p>}
      </ul>
    </section>
  );
};
export default Products;
