import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [data, setData] = useState({ products: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://henri-potier.xebia.fr/books");
      setData(result.data);
      //console.log("data", result.data);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1>Products</h1>
      <ul>
        {data.length ? (
          data.map(product => {
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
