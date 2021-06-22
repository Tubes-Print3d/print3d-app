import * as React from "react";
import { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import ProductCard from "./ProductCard";
import HeadTitle from "../../components/HeadTitle";
import WithLoading from "../../components/WithLoading";
import Navbar from "../../components/Navbar";
import { useDeleteProductMutation, useGetProductsQuery } from "./products.api";
import ProductToolbar from "./ProductToolbar";
import { usePengguna } from "../../hooks/pengguna";
import { useSnackbar } from "notistack";

function ProductPage() {
  const { data: allProducts, isLoading } = useGetProductsQuery();

  const pengguna = usePengguna();
  const isDesainer = pengguna.data?.roles.includes("desainer");

  const [filter, setFilter] = useState(isDesainer ? "my" : null); // null, 'my'

  const [deleteProduct] = useDeleteProductMutation();

  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

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
                  control={produk.pemilik._id === pengguna.data?._id}
                  onEdit={(produk) => {
                    history.push({
                      pathname: `/produk/ubah/${produk._id}`,
                      state: { product: produk },
                    });
                  }}
                  onDelete={(produk) => {
                    deleteProduct(produk._id)
                      .unwrap()
                      .then((res) => {
                        enqueueSnackbar("Produk berhasil dihapus", {
                          variant: "success",
                        });
                      })
                      .catch((error) => {
                        enqueueSnackbar(error.data.error, { variant: "error" });
                      });
                  }}
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
