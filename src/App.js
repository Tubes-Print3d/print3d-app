import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./views/HomePage";
import NotFoundPage from "./views/NotFoundPage";

import ProfilePage from "./features/profile/ProfilePage";

import DetailProductPage from "./features/products/DetailProductPage";
import ProductPage from "./features/products/ProductPage";
import AddProduct from "./features/products/AddProduct";
import EditProduct from "./features/products/EditProduct";

import CheckoutPage from "./features/orders/CheckoutPage";
import KelolaPesanan from "./features/orders/KelolaPesanan";
import History from "./features/orders/History";

import EditMesin from "./features/products/EditMesin";
import EditBahan from "./features/products/EditBahan";
import Keranjang from "./features/products/Keranjang";

import Percetakan from "./features/printing/Percetakan";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ProfilePage} path="/profil" />
        <Route component={ProductPage} exact path="/produk" />
        <PrivateRoute children={<AddProduct />} path="/produk/tambah" />
        <PrivateRoute children={<EditProduct />} path="/produk/ubah/:id" />
        <Route component={DetailProductPage} exact path="/produk/:id" />
        <Redirect exact from="/percetakan" to="/percetakan/pesanan" />
        <PrivateRoute children={<Percetakan />} path="/percetakan/:kelola" />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </Router>
  );
}

export default App;
