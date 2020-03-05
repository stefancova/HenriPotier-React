import axios from "axios";
import React, { useEffect, useState } from "react";
import MainContext from "./context/MainContext";

const AppProvider = props => {
  // States
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState({ products: [] });

  // FetchData
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://henri-potier.xebia.fr/books");
      setProducts(result.data);
      console.log("Fetch Data");
    };
    fetchData();
  }, []);

  const addToCart = product => {
    console.log("add to cart", product);
    setCart(cart + product.price);
  };

  // Données/méthodes partagées du context
  const initialValue = {
    products,
    search,
    setSearch,
    cart,
    addToCart
  };

  return (
    <>
      <MainContext.Provider displayName="Main Context" value={initialValue}>
        {props.children}
      </MainContext.Provider>
    </>
  );
};

export default AppProvider;
