import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.scss";

const Products = () => {
  const [data, setData] = useState({ products: [] });
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://henri-potier.xebia.fr/books");
      setData(result.data);
    };
    fetchData();
  }, []);

  const getProducts = () => {
    return data
      .filter(product => {
        return product.title.toLowerCase().indexOf(search) !== -1;
      })
      .map(product => {
        return <Product key={product.isbn} product={product} />;
      });
  };

  return (
    <section>
      <p>
        stocker dans le context les resultats de la recherche et non la
        recherche
      </p>
      <form className="form">
        <input
          type=""
          placeholder="Enter search..."
          onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      </form>
      <ul className="products-list columns is-multiline">
        {data.length ? getProducts() : <p>LOADING...</p>}
      </ul>
    </section>
  );
};
export default Products;
