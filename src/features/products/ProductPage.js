import * as React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import { selectAllProducts, selectProductsStatus } from "./productsSlice";
import HeadTitle from "../../components/HeadTitle";
import WithLoading from "../../components/WithLoading";
import Navbar from "../../components/Navbar";

function ProductPage() {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);

  return (
    <Container>
      <Navbar />
      <HeadTitle top="DAFTAR" bottom="PRODUK" />
      <WithLoading loading={status === "loading"}>
        <Grid container spacing={2}>
          {products && products.length ? (
            products.map((produk, i) => (
              <Grid item key={i} xs={6} sm={4} md={3} lg={2}>
                <ProductCard produk={produk} />
              </Grid>
            ))
          ) : (
            <Grid container justify="center">
              <Grid item>
                <Typography color="primary">-- No product --</Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </WithLoading>
    </Container>
  );
}

export default ProductPage;
