import React from "react";
import {
  CardMedia,
  Typography,
  Card,
  CardContent,
  makeStyles,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import noImage from "./no-image.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProductCard({ produk, ...props }) {
  const classes = useStyles();
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={`gambar ${produk.nama}`}
        height="140"
        image={produk.previewImage || noImage}
        title={`gambar ${produk.nama}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h4" color="primary">
          {produk.nama}
        </Typography>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="body2" component="p">
              {produk.royalty ? formatter.format(produk.royalty) : "GRATIS"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary" component="p">
              {`By ${produk.pemilik}`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

ProductCard.props = {
  produk: PropTypes.objectOf({
    nama: PropTypes.string,
    previewImage: PropTypes.string,
    royalty: PropTypes.number,
    pemilik: PropTypes.string,
  }),
};

export default ProductCard;
