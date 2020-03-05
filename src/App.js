import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import AppProvider from "./AppProvider";
import Header from "./components/Header/Header";
import PageCart from "./pages/PageCart";
import PageProduct from "./pages/PageProduct";
import PageProducts from "./pages/PageProducts";

const App = () => {
  return (
    <div className="container">
      <AppProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={PageProducts} />
            <Route path="/product/:id" component={PageProduct} />
            <Route path="/cart" component={PageCart} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
