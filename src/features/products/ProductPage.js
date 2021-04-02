import { Container, Grid } from "@material-ui/core";
import * as React from "react";
import HeadTitle from "../../components/HeadTitle";
import ProductCard from "./ProductCard";

const dummyProducts = Array(20)
  .fill(0)
  .map((_, i) => ({
    nama: `Produk #${i + 1}`,
    previewImage: "",
    royalty: 10000 * i,
    pemilik: "John Doe",
  }));

function ProductPage() {
  return (
    <Container>
      <HeadTitle top="DAFTAR" bottom="PRODUK" />
      <Grid container spacing={2}>
        {dummyProducts.map((produk, i) => (
          <Grid item key={i} xs={6} sm={4} md={3} lg={2}>
            <ProductCard produk={produk} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProductPage;
