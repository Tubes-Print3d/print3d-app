import React from "react";
import {
  CardMedia,
  Typography,
  Card,
  CardContent,
  makeStyles,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import noImage from "./no-image.jpg";
import currency from "../../utils/currency";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ProductCard({ produk, ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/produk/${produk._id}`}>
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
                {produk.royalty ? currency.format(produk.royalty) : "GRATIS"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary" component="p">
                {`By ${produk.pemilik.nama}`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ProductCard.props = {
  produk: PropTypes.objectOf({
    _id: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    previewImage: PropTypes.string,
    royalty: PropTypes.number.isRequired,
    pemilik: PropTypes.objectOf({
      _id: PropTypes.string,
      nama: PropTypes.string.isRequired,
    }),
  }),
};

export default ProductCard;
