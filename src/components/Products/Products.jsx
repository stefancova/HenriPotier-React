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

  const handleInput = e => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <section>
      <form className="form">
        <input
          type=""
          placeholder="Enter search..."
          onChange={e => handleInput(e)}
        />
      </form>
      <ul className="products-list columns is-multiline">
        {data.length ? (
          data
            .filter(product => {
              return product.title.toLowerCase().indexOf(search) !== -1;
            })
            .map(product => {
              return <Product key={product.isbn} product={product} />;
            })
        ) : (
          <p>LOADING...</p>
        )}
      </ul>
    </section>
  );
};
export default Products;
