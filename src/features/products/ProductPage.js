import * as React from "react";
import { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import ProductCard from "./ProductCard";
import HeadTitle from "../../components/HeadTitle";
import WithLoading from "../../components/WithLoading";
import Navbar from "../../components/Navbar";
import { useGetProductsQuery } from "./products.api";
import ProductToolbar from "./ProductToolbar";
import { usePengguna } from "../../hooks/pengguna";

function ProductPage() {
  const { data: allProducts, isLoading } = useGetProductsQuery();

  const [filter, setFilter] = useState("my"); // null, 'my'
  const pengguna = usePengguna();

  const products =
    pengguna?.data && filter === "my"
      ? allProducts?.filter(
          (product) => product.pemilik._id === pengguna.data._id
        )
      : allProducts;

  return (
    <Container>
      <Navbar />
      <HeadTitle top="DAFTAR" bottom="PRODUK" />
      {pengguna?.data?.roles.includes("desainer") && (
        <ProductToolbar
          filter={filter}
          onFilterChange={(filt) => setFilter(filt)}
        />
      )}
      <WithLoading loading={isLoading}>
        <Grid container spacing={2}>
          {products && products.length ? (
            products.map((produk, i) => (
              <Grid item key={i} xs={6} sm={4} md={3} lg={2}>
                <ProductCard
                  produk={produk}
                  setting={produk.pemilik._id === pengguna.data?._id}
                />
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
