import React, { useContext } from "react";
import MainContext from "../context/MainContext";
const Products = () => {
  const context = useContext(MainContext);
  return (
    <section>
      <h1>Products</h1>
      <button onClick={e => context.updateCart(1)}>Add to cart</button>
    </section>
  );
};
export default Products;
