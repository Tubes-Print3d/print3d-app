import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  CardMedia,
  Typography,
  Card,
  CardContent,
  makeStyles,
  CardActionArea,
  Grid,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";

import noImage from "./no-image.jpg";
import currency from "../../utils/currency";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    "& .MuiCardActionArea-root": {
      height: "100%",
    },
  },
  settingButton: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
}));

function ProductCard({ produk, control, onEdit, onDelete, ...props }) {
  const classes = useStyles();

  const popupId = `product-card-${uuidv4()}`;
  const popupState = usePopupState({ variant: "popover", popupId });

  return (
    <>
      <Card className={classes.root}>
        {control && (
          <IconButton
            color="secondary"
            className={classes.settingButton}
            aria-label="settings"
            {...bindTrigger(popupState)}
          >
            <MoreHorizIcon />
          </IconButton>
        )}
        <CardActionArea component={Link} to={`/produk/${produk._id}`}>
          <CardMedia
            component="img"
            alt={`gambar ${produk.nama}`}
            height="140"
            image={produk.previewImage || noImage}
            title={`gambar ${produk.nama}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h4"
              color="primary"
            >
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
      <Menu {...bindMenu(popupState)}>
        <MenuItem
          onClick={() => {
            onEdit(produk);
            popupState.setOpen(false);
          }}
        >
          Ubah
        </MenuItem>
        <MenuItem
          onClick={() => {
            onDelete(produk);
            popupState.setOpen(false);
          }}
        >
          Hapus
        </MenuItem>
      </Menu>
    </>
  );
}

ProductCard.defaultProps = {
  control: false,
  onEdit: (p) => {},
  onDelete: (p) => {},
};

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
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ProductCard;
