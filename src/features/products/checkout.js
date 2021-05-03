import React from "react";
import HeadTitle from "../../components/HeadTitle";
import { Container, Grid, Box } from "@material-ui/core";
import Tombol from "../../components/Button";
import Image from "material-ui-image";
import noImage from "./no-image.jpg";
import TextFieldKuning from "../../components/TextFieldKuning";
import { useSelector } from "react-redux";
import { selectProductById, selectProductsStatus } from "./productsSlice";
import { useParams } from "react-router-dom";
import NotFoundPage from "../../views/NotFoundPage";
import WithLoading from "../../components/WithLoading";

export default function DetailProductPage() {
  const { id } = useParams();
  const product = useSelector(selectProductById(id));
  const status = useSelector(selectProductsStatus);

  if (status !== "loading" && !product) return <NotFoundPage />;

  return (
    <Container>
      <HeadTitle top="DETAIL" bottom="PRODUK" />
      <WithLoading loading={status === "loading"}>
        {product && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Image src={noImage} />
            </Grid>
            <Grid item md={7}>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <TextFieldKuning
                        label="Nama Produk"
                        value={product.nama}
                        readOnly
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextFieldKuning
                        label="Royalti"
                        value={product.royalty}
                        readOnly
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextFieldKuning
                    multiline
                    rows={5}
                    label="Deskripsi"
                    value="Lorem Ipsum dolor sit amet."
                    readOnly
                  />
                </Grid>
                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <TextFieldKuning
                        label="Pemilik"
                        value={product.pemilik.nama}
                        readOnly
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </WithLoading>
      <Box mt={4}>
        <Grid container justify="flex-end" spacing={3}>
          <Grid item>
            <Tombol>Simpan ke wishlist</Tombol>
          </Grid>
          <Grid item>
            <Tombol>Tambah ke keranjang</Tombol>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
