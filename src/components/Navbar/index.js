import * as React from "react";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Grid, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

import Keranjang from "../../features/profile/Keranjang";
import Tombol from "../Button";
import { logout } from "../../features/profile/profile.slice";
import { useLoggedIn } from "../../hooks/pengguna";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: theme.spacing(9),
    width: "calc(100vw - 17px)",
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const isLoggedIn = useLoggedIn();

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [keranjangAnchorEl, setKeranjangAnchorEl] = useState(null);
  const keranjangIsOpen = Boolean(keranjangAnchorEl);

  const id = keranjangIsOpen ? "keranjang-popover" : undefined;

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          justify="space-between"
          direction="row"
          alignItems="center"
        >
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              {history.length > 2 && (
                <Grid item>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    <ArrowBackIcon color="primary" />
                  </IconButton>
                </Grid>
              )}
              <Grid item>
                <IconButton
                  color="primary"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <HomeIcon color="primary" />
                </IconButton>
              </Grid>
              {isLoggedIn && (
                <Grid item>
                  <Tombol variant="outlined" endIcon={<SwapHorizIcon />}>
                    GANTI AKUN
                  </Tombol>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item>
            {isLoggedIn ? (
              <Grid container spacing={3} direction="row" alignItems="center">
                <Grid item>
                  <IconButton
                    color="primary"
                    aria-label="open-keranjang"
                    aria-describedby={id}
                    onClick={(e) => setKeranjangAnchorEl(e.currentTarget)}
                  >
                    <ShoppingCartIcon color="primary" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Tombol
                    variant="outlined"
                    onClick={() => {
                      dispatch(logout());
                      enqueueSnackbar("Sampai jumpa 👋", { variant: "info" });
                    }}
                  >
                    KELUAR
                  </Tombol>
                </Grid>
              </Grid>
            ) : (
              <Tombol
                variant="contained"
                onClick={() => {
                  history.push({
                    pathname: "/",
                    state: { from: history.location, login: true },
                  });
                }}
              >
                MASUK
              </Tombol>
            )}
          </Grid>
        </Grid>
      </Container>
      <Keranjang
        popoverId={id}
        open={keranjangIsOpen}
        onClose={() => setKeranjangAnchorEl(null)}
        anchorEl={keranjangAnchorEl}
      />
    </div>
  );
}

Navbar.default = {};
Navbar.propTypes = {};

export default Navbar;
