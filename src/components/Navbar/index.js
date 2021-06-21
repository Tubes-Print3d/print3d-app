import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

import Tombol from "../Button";
import { selectToken, logout } from "../../features/profile/profileSlice";
import { useSnackbar } from "notistack";

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

  const { enqueueSnackbar } = useSnackbar();

  if (!loggedIn) return null;

  return (
    <div className={classes.root}>
      <Container>
        <Grid container justify="flex-end" alignItems="center" spacing={3}>
          <Grid item>
            <IconButton color="primary" aria-label="open-keranjang">
              <ShoppingCartIcon color="primary" fontSize="medium" />
            </IconButton>
          </Grid>
          <Grid item>
            <Tombol
              variant="contained"
              onClick={() => {
                dispatch(logout());
                enqueueSnackbar("Sampai jumpa 👋", { variant: "info" });
              }}
            >
              KELUAR
            </Tombol>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Navbar.default = {};
Navbar.propTypes = {};

export default Navbar;
