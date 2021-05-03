import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import WithLoading from "./WithLoading";
import { useState, useEffect } from "react";
import Tombol from "./Button";
import api from '../utils/api'
import ProductCard from "../features/products/ProductCard";

function Effect(props) {
  const [isLoading, setisLoading] = useState(true);
  const [nunggu, setnunggu] = useState(true);
  const [products, setProducts] = useState([])
  console.log(products)
  useEffect(async() => {
    const response = await api.get('/v1/products')
    setProducts(response.data.payload)
    setisLoading(false)
  }, [nunggu]);
  return (
    <div>
      <WithLoading loading={isLoading}>{
          products.map((produk,i) => {
          return <ProductCard produk = {produk} key={i}></ProductCard> 
          })
      }
      </WithLoading>
    </div>
  );
}

Effect.propTypes = {};

export default Effect;
