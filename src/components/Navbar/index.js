import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tombol from "../Button";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: theme.spacing(9),
    width: "100%",
  },
}));

function Navbar({ onClickKeluar, ...props }) {
  const classes = useStyles();
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
            <Tombol variant="contained" onClick={onClickKeluar}>
              KELUAR
            </Tombol>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Navbar.default = {
  onClickKeluar: () => {},
};
Navbar.propTypes = {
  onClickKeluar: PropTypes.func,
};

export default Navbar;
