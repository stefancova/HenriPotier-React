import axios from "axios";
import React, { useEffect, useState } from "react";
import MainContext from "./context/MainContext";

const AppProvider = props => {
  console.log("AppProvider > rendering...");

  // States
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    discount: 0
  });
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // FetchData from API
  const fetchData = async () => {
    console.log("AppProvider > fetchData");
    const result = await axios("http://henri-potier.xebia.fr/books");
    setProducts(result.data);
  };

  useEffect(() => {
    console.log("AppProvider > useEffect");
    fetchData();
    return () => {
      console.log("clean up ...");
    };
  }, []);

  const addToCart = product => {
    console.log("Add to cart");
    setCart({
      ...cart,
      totalPrice: cart.totalPrice + product.price
    });
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
