import * as React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import HeadTitle from "../../components/HeadTitle";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { selectAllProducts, selectProductsStatus } from "./productsSlice";
import WithLoading from "../../components/WithLoading";

// const dummyProducts = Array(20)
//   .fill(0)
//   .map((_, i) => ({
//     _id: `23090f0bcbe82a35${i}ab24`,
//     nama: `Produk #${i + 1}`,
//     previewImage: "",
//     royalty: 10000 * i,
//     pemilik: { nama: "John Doe" },
//   }));

function ProductPage() {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);

  return (
    <Container>
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
