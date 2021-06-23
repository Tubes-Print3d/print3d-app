import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useHistory } from "react-router-dom";

import Tombol from "../../components/Button";
import { useGetKeranjangQuery, useRemoveFromCartMutation } from "./profile.api";
import WithLoading from "../../components/WithLoading";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPopover-paper": {
      overflowY: "hidden",
    },
  },
  title: {
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
  },
  wrapper: {
    padding: theme.spacing(2),
  },
  list: {
    width: 300,
    maxHeight: 400,
    position: "relative",
    overflow: "auto",
  },
  listEmpty: {
    width: 300,
    textAlign: "center",
    padding: theme.spacing(2, 0),
  },
  listText: {
    whiteSpace: "nowrap",
    "& span": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
}));

function Keranjang({ popoverId, ...props }) {
  const classes = useStyles();
  const { data: keranjang, isLoading } = useGetKeranjangQuery();
  const [removeFromCart] = useRemoveFromCartMutation();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Popover
      id={popoverId}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      className={classes.root}
      {...props}
    >
      <Grid
        container
        className={classes.wrapper}
        justify="center"
        direction="column"
        spacing={1}
      >
        <Grid item>
          <Typography color="primary" className={classes.title}>
            Keranjang
          </Typography>
        </Grid>
        <Grid item style={{ padding: 0 }}>
          <WithLoading isLoading={isLoading}>
            {keranjang?.length ? (
              <List disablePadding className={classes.list}>
                {keranjang?.map(
                  (
                    { nama: title, pemilik: { nama: designer }, _id: itemId },
                    i
                  ) => (
                    <ListItem
                      key={i}
                      button
                      divider
                      onClick={() => {
                        history.push(`/produk/${itemId}`);
                      }}
                    >
                      <ListItemText
                        className={classes.listText}
                        primary={title}
                        secondary={`By: ${designer}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          size="medium"
                          onClick={async () => {
                            try {
                              await removeFromCart(itemId).unwrap();
                              enqueueSnackbar("Produk dihapus dari keranjang", {
                                variant: "info",
                              });
                            } catch (error) {
                              enqueueSnackbar(error.data.error, {
                                variant: "error",
                              });
                            }
                          }}
                        >
                          <DeleteOutlineIcon color="primary" fontSize="small" />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                )}
              </List>
            ) : (
              <Typography color="textSecondary" className={classes.listEmpty}>
                ~Keranjang kosong~
              </Typography>
            )}
          </WithLoading>
        </Grid>
        <Tombol variant="contained">CHECKOUT</Tombol>
      </Grid>
    </Popover>
  );
}

Keranjang.propTypes = {
  popoverId: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  anchorEl: PropTypes.element,
};

export default Keranjang;
