import * as React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import ProfilePage from "./features/profile/ProfilePage";
import ProductPage from "./features/products/ProductPage";
import NotFoundPage from "./views/NotFoundPage";

import DetailProductPage from "./features/products/DetailProductPage";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/products/productsSlice";
import CheckoutPage from "./features/orders/CheckoutPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ProfilePage} path="/profil" />
        <Route component={ProductPage} exact path="/produk" />
        <Route component={DetailProductPage} exact path="/produk/:id" />
        <Route component={CheckoutPage} exact path="/checkout" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </Router>
  );
}

export default App;
