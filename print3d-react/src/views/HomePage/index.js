import { Container, Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import Button from "../../components/Button";
import berandaImg from "./beranda.png";

const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    background: `url(${berandaImg}), ${theme.palette.primary.main}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    minHeight: "100vh",
    overflow: "auto",
  },
  row1: {
    marginTop: theme.spacing(6),
  },
}));

function HomePage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.row1} spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="contained">Wishlist</Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Cari Produk</Button>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item>
            <Button variant="lined">DAFTAR</Button>
          </Grid>
          <Grid item>
            <Button variant="lined">LOGIN</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
