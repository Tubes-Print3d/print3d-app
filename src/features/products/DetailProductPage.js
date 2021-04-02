import React from "react";
import HeadTitle from "../../components/HeadTitle";
import { Container, Grid, Box } from "@material-ui/core";
import Tombol from "../../components/Button";
import Image from "material-ui-image";
import noImage from "./no-image.jpg";
import TextFieldKuning from "../../components/TextFieldKuning";

export default function DetailProductPage() {
  return (
    <Container>
      <HeadTitle top="DETAIL" bottom="PRODUK" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Image src={noImage} />
        </Grid>
        <Grid item md={7}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextFieldKuning label="Nama Produk" />
                </Grid>
                <Grid item md={6}>
                  <TextFieldKuning label="Harga" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextFieldKuning multiline rows={5} label="Deskripsi" />
            </Grid>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextFieldKuning label="Pemilik" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
