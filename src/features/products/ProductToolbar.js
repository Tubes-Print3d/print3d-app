import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 1),
    "& > *": {},
  },
}));

function ProductToolbar() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="flex-end" spacing={2}>
      <Grid item>
        <Link to="/produk/tambah" component={Button} variant="contained">
          Tambah
        </Link>
      </Grid>
      <Grid item>
        <Button variant="contained">Pilih</Button>
      </Grid>
    </Grid>
  );
}

export default ProductToolbar;
