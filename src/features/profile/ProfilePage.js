import * as React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeadTitle from "../../components/HeadTitle";
import Image from "material-ui-image"
import noImage from "./no-image.jpg"
import TextFieldKuning from "../../components/TextFieldKuning";
import Tombol from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function ProfilPage() {
  const classes = useStyles();

  return (
    <Container>
      <HeadTitle top="UBAH" bottom="PROFIL" />

      <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Image src={noImage} />
              <input
      accept="image/*"
      id="contained-button-file"
      multiple
      type="file"
    />
    <label htmlFor="contained-button-file">
      <Tombol variant="contained" color="primary" component="span">
        Upload
      </Tombol>
    </label>
            </Grid>
            <Grid item md={7}>
              <Grid container direction="column" spacing={3}>
              <Grid item md={12}>
                      <TextFieldKuning
                        label="Nama"
                      />
                    </Grid>
                <Grid item>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <TextFieldKuning
                        label="Nomor Hp"
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextFieldKuning
                        label="Email"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextFieldKuning
                    multiline
                    rows={5}
                    label="Alamat Lengkap"
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Tombol>Submit</Tombol>
              </Grid>
            </Grid>
          </Grid>
    </Container>
  );
}

export default ProfilPage;
