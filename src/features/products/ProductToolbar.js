import React from "react";
import {
  FormControlLabel,
  Grid,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

import Button from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 1),
  },
  switchButton: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 20,
    paddingRight: theme.spacing(2),
  },
}));

function ProductToolbar({ filter, onFilterChange, ...props }) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <FormControlLabel
          className={classes.switchButton}
          control={<Switch color="primary" />}
          label={
            <Typography color="primary">Tampilkan hanya milik saya</Typography>
          }
          checked={filter === "my"}
          onChange={() => onFilterChange(filter === "my" ? null : "my")}
        />
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/produk/tambah"
          variant="contained"
          startIcon={<AddIcon color="inherit" />}
        >
          Tambah
        </Button>
      </Grid>
    </Grid>
  );
}

export default ProductToolbar;
