import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import NotFoundPage from "./views/NotFoundPage";

import ProfilePage from "./features/profile/ProfilePage";
import ProductPage from "./features/products/ProductPage";
import DetailProductPage from "./features/products/DetailProductPage";
import CheckoutPage from "./features/orders/CheckoutPage";
import ProductForm from "./features/products/ProductForm";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ProfilePage} path="/profil" />
        <Route component={ProductPage} exact path="/produk" />
        <PrivateRoute children={<ProductForm />} path="/produk/tambah" />

        <Route component={DetailProductPage} exact path="/produk/:id" />
        <Route component={CheckoutPage} exact path="/checkout" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </Router>
  );
}

export default App;
