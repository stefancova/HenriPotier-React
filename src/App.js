import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
