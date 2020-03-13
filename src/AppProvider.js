import axios from "axios";
import React, { useEffect, useState } from "react";
import MainContext from "./context/MainContext";

const AppProvider = props => {
  const apiUrl = "http://henri-potier.xebia.fr/books/";

  const initialCart = () =>
    JSON.parse(localStorage.getItem("cart")) || {
      items: []
    };

  // States
  const [cart, setCart] = useState(initialCart);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartDiscount, setCartDiscount] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  // FetchData from API
  const fetchData = async () => {
    console.log("AppProvider > fetchData");
    const result = await axios(apiUrl);
    setProducts(result.data);
  };

  // Effect for fetching data
  useEffect(() => {
    fetchData();
  }, []);

  const countCartTotal = () => {
    console.log("countCartTotal", cart.items);
    let totalPrice = 0;
    cart.items.forEach(item => {
      totalPrice += item.product.price * item.quantity;
    });
    setCartTotal(totalPrice);
    fetchBestOffers();
  };

  // Effect for cart
  useEffect(() => {
    console.log("AppProvider > useEffect -> store cart");
    countCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, countCartTotal]);

  // SaveCart with State
  const saveCart = () => {
    console.log("saveCart", cart);
    if (cart.items.length === 0) {
      setCartTotal(0);
      setCartDiscount(0);
    }
    setCart({ ...cart });
  };

  const addToCart = product => {
    const productExistInCart = cart.items.find(
      item => item.product.isbn === product.isbn
    );
    if (productExistInCart) {
      productExistInCart.quantity++;
    } else {
      cart.items.push({ product: product, quantity: 1 });
    }
    saveCart();
  };

  const removeCartItem = item => {
    cart.items.splice(
      cart.items.findIndex(it => it.product.isbn === item.product.isbn),
      1
    );
    saveCart();
  };

  const changeCartItemQuantity = (item, quantity) => {
    const product = cart.items.find(
      it => it.product.isbn === item.product.isbn
    );
    product.quantity += quantity;
    if (product.quantity === 0) removeCartItem(item);
    saveCart();
  };

  const fetchBestOffers = async () => {
    let isbns = cart.items.map(element => element.product.isbn);

    if (isbns.length > 0) {
      const result = await axios(apiUrl + isbns.join() + "/commercialOffers");
      console.log("FetchBestOffers", result.data.offers);
      computeBestOffers(result.data.offers);
      //return result.data.offers;
    }
  };

  const computeBestOffers = offers => {
    let percentageOffer = 0;
    let minusOffer = 0;
    let sliceOffer = 0;
    const bestOffers = [];

    offers.forEach(offer => {
      switch (offer.type) {
        case "percentage":
          if (percentageOffer > 0) bestOffers.push(percentageOffer);
          break;
        case "minus":
          minusOffer = offer.value;
          if (minusOffer > 0) bestOffers.push(minusOffer);
          break;
        case "slice":
          sliceOffer = Math.floor(cartTotal / offer.sliceValue) * offer.value;
          if (sliceOffer > 0) bestOffers.push(sliceOffer);
          break;
        default:
          console.log("Unexpected offer.type");
      }
    });
    console.log("P-M-S", percentageOffer, minusOffer, sliceOffer);
    console.log("best offers", Math.max(...bestOffers));

    setCartDiscount(Math.round(Math.max(...bestOffers) * 100) / 100);
  };

  // Données/méthodes partagées du context
  const initialValue = {
    products,
    search,
    setSearch,
    cart,
    cartTotal,
    cartDiscount,
    addToCart,
    removeCartItem,
    changeCartItemQuantity
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
