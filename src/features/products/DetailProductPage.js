import React from "react";
import HeadTitle from "../../components/HeadTitle";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Grid,
  Box,
  TextField,
} from "@material-ui/core";
import Tombol from "../../components/Button";
import kodok from "./KODOK PUASA.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    height: "18rem",
  },
  textField: {
    background: theme.palette.primary.main,
  },
}));

export default function DetailProductPage() {
  const classes = useStyles();

  return (
    <Container>
      <HeadTitle top="DETAIL" bottom="PRODUK" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Paper>
            <Grid container spacing={2}>
              <Grid item>
                <img className={classes.img} alt="kodok puasa" src={kodok} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={7}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    margin="dense"
                    color="primary"
                    label="Nama Produk"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    margin="dense"
                    color="primary"
                    label="id produk"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                className={classes.textField}
                fullWidth
                multiline
                rows={5}
                margin="dense"
                color="primary"
                label="Deskripsi"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    margin="dense"
                    color="primary"
                    label="Nama Produk"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    margin="dense"
                    color="primary"
                    label="id produk"
                    variant="outlined"
                  />
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
