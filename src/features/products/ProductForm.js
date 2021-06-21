import React from "react";
import { Grid, Container } from "@material-ui/core";
import Image from "material-ui-image";
import TextFieldKuning from "../../components/TextFieldKuning";
import noImage from "./no-image.jpg";
import HeadTitle from "../../components/HeadTitle";

function ProductForm({ title, ...props }) {
  const readOnly = false;

  return (
    <Container>
      <HeadTitle top={title.toUpperCase()} bottom="PRODUK" />
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
                    value={props.product?.nama}
                    readOnly={readOnly}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextFieldKuning
                    label="Royalti"
                    value={props.product?.royalty}
                    readOnly={readOnly}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextFieldKuning
                multiline
                rows={5}
                label="Deskripsi"
                value={props.product ? "Lorem Ipsum dolor sit amet." : null}
                readOnly={readOnly}
              />
            </Grid>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextFieldKuning
                    label="Pemilik"
                    value={props.product?.pemilik.nama}
                    readOnly={readOnly}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductForm;
