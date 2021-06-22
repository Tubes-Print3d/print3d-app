import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Grid, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Keranjang from "../../features/profile/Keranjang";
import Tombol from "../Button";
import { selectToken, logout } from "../../features/profile/profileSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: theme.spacing(9),
    width: "100%",
  },
}));

function Navbar({ ...props }) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loggedIn = useSelector(selectToken);

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
            <Grid container spacing={1}>
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
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={3} direction="row" alignItems="center">
              {loggedIn && (
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
              )}
              <Grid item>
                {loggedIn && (
                  <Tombol
                    variant="contained"
                    onClick={() => {
                      dispatch(logout());
                      enqueueSnackbar("Sampai jumpa 👋", { variant: "info" });
                    }}
                  >
                    KELUAR
                  </Tombol>
                )}
              </Grid>
            </Grid>
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
