import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
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

  const [addToCart] = useAddToCartMutation();

  if (!isLoading && !product) return <NotFoundPage />;

  return (
    <Container>
      <Navbar />
      <HeadTitle top="DETAIL" bottom="PRODUK" />
      <WithLoading loading={isLoading}>
        {product && (
          <ProductForm
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
          // <Grid container spacing={3}>
          //   <Grid item xs={12} md={5}>
          //     <Image src={noImage} />
          //   </Grid>
          //   <Grid item md={7}>
          //     <Grid container direction="column" spacing={3}>
          //       <Grid item>
          //         <Grid container spacing={3}>
          //           <Grid item md={6}>
          //             <TextFieldKuning
          //               label="Nama Produk"
          //               value={product.nama}
          //               readOnly
          //             />
          //           </Grid>
          //           <Grid item md={6}>
          //             <TextFieldKuning
          //               label="Royalti"
          //               value={product.royalty}
          //               readOnly
          //             />
          //           </Grid>
          //         </Grid>
          //       </Grid>
          //       <Grid item>
          //         <TextFieldKuning
          //           multiline
          //           rows={5}
          //           label="Deskripsi"
          //           value="Lorem Ipsum dolor sit amet."
          //           readOnly
          //         />
          //       </Grid>
          //       <Grid item>
          //         <Grid container spacing={3}>
          //           <Grid item md={6}>
          //             <TextFieldKuning
          //               label="Pemilik"
          //               value={product.pemilik.nama}
          //               readOnly
          //             />
          //           </Grid>
          //         </Grid>
          //       </Grid>
          //     </Grid>
          //   </Grid>
          // </Grid>
        )}
      </WithLoading>
      <Box mt={4}>ab</Box>
    </Container>
  );
}
