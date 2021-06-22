import React from "react";
import { Container, Grid, Box, Button } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import NotFoundPage from "../../views/NotFoundPage";

import WithLoading from "../../components/WithLoading";
import HeadTitle from "../../components/HeadTitle";
import Tombol from "../../components/Button";
import Navbar from "../../components/Navbar";
import { useGetProductsQuery } from "./products.api";
import { useAddToCartMutation } from "../profile/profile.api";
import ProductForm from "./ProductForm";

export default function DetailProductPage() {
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();
  const { isLoading, product } = useGetProductsQuery(null, {
    selectFromResult: (state) => ({
      product: state.data?.find((prod) => prod._id === id),
      ...state,
    }),
  });

  const history = useHistory();
  const [addToCart] = useAddToCartMutation();

  if (!isLoading && !product) return <NotFoundPage />;

  return (
    <Container>
      <Navbar />
      <HeadTitle top="DETAIL" bottom="PRODUK" />
      <WithLoading loading={isLoading}>
        {product && (
          <ProductForm
            readOnly
            formikSetup={{
              initialValues: {
                nama: product.nama,
                royalty: product.royalty,
                deskripsi: product.deskripsi || "Tidak ada deskripsi",
                pemilik: product.pemilik.nama,
              },
            }}
            actionComponent={
              <Grid container justify="flex-end" spacing={3}>
                <Grid item>
                  <Tombol
                    variant="outlined"
                    disabled
                    onClick={() => {
                      enqueueSnackbar("Belum diimplementasikan", {
                        variant: "info",
                      });
                    }}
                  >
                    Simpan ke wishlist
                  </Tombol>
                </Grid>
                <Grid item>
                  <Tombol
                    variant="outlined"
                    onClick={async () => {
                      try {
                        const payload = await addToCart(id).unwrap();
                        enqueueSnackbar(
                          "Produk berhasil ditambahkan ke dalam keranjang",
                          { variant: "success" }
                        );
                      } catch (error) {
                        if (error.status === 401)
                          enqueueSnackbar("Silahkan login terlebih dahulu", {
                            variant: "info",
                            action: (
                              <Button
                                variant="outlined"
                                color="textPrimary"
                                onClick={() => {
                                  history.push({
                                    pathname: "/",
                                    state: {
                                      login: true,
                                      from: history.location,
                                    },
                                  });
                                }}
                              >
                                LOGIN
                              </Button>
                            ),
                          });
                        else
                          enqueueSnackbar(error.data.error, {
                            variant: "info",
                          });
                      }
                    }}
                  >
                    Tambah ke keranjang
                  </Tombol>
                </Grid>
              </Grid>
            }
          />
        )}
      </WithLoading>
    </Container>
  );
}
