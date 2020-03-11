import axios from "axios";
import React, { useEffect, useState } from "react";
import MainContext from "./context/MainContext";

const AppProvider = props => {
  console.log("AppProvider > rendering...");

  const initialCart = () =>
    JSON.parse(localStorage.getItem("cart")) || {
      items: [],
      totalPrice: 0,
      discount: 0
    };

  // States
  const [cart, setCart] = useState(initialCart);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // FetchData from API
  const fetchData = async () => {
    console.log("AppProvider > fetchData");
    const result = await axios("http://henri-potier.xebia.fr/books");
    setProducts(result.data);
  };

  // Effect for fetching data
  useEffect(() => {
    console.log("AppProvider > useEffect -> FetchData");
    fetchData();
  }, []);

  // Effect for cart
  useEffect(() => {
    console.log("AppProvider > useEffect -> store cart");
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // SaveCart with State
  const saveCart = () => {
    setCart({
      ...cart,
      items: cart.items,
      totalPrice: countCartTotal()
    });
  };

  const addToCart = product => {
    console.log("Add to cart", product);
    const productExistInCart = cart.items.find(
      item => item.product.isbn === product.isbn
    );
    if (productExistInCart) {
      productExistInCart.quantity++;
    } else {
      //TODO: only store ISBN ?
      cart.items.push({ product: product, quantity: 1 });
    }
    saveCart();
  };

  const countCartTotal = () => {
    let totalPrice = 0;
    cart.items.forEach(item => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
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
