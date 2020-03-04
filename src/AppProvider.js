import React, { useState } from "react";
import MainContext from "./context/MainContext";

const AppProvider = props => {
  // States
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState("");

  const updateCart = value => setCart(cart + value);

  // Données/méthodes partagées du context
  const initialValue = {
    search,
    setSearch,
    cart,
    updateCart
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
