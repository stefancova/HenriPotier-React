import React, { useState } from "react";
import MainContext from "./context/MainContext";

const AppProvider = props => {
  // State cart
  const [cart, setCart] = useState(0);

  const updateCart = value => setCart(cart + value);

  // Données partagées du context
  const initialValue = {
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
