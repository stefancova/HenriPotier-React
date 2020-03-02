import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import AppProvider from "./AppProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <div className="container">
      <AppProvider>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Products />
            <Cart />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
