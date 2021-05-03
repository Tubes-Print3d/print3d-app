import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  List,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
import TextFieldKuning from "../../components/TextFieldKuning";
import HeadTitle from "../../components/HeadTitle";
import Tombol from "../../components/Button";

function CheckoutPage(props) {
  return (
    <Container>
      <Grid container justify="center" direction="column">
        <HeadTitle top="Halaman" bottom="Checkout" />
        <Grid item>
          <TextFieldKuning label="Alamat" multiline rows={5} />
        </Grid>
        <Grid item>
          <List>
            <ListItem>Produk1</ListItem>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Material1" />
                  Qty: 1
                </ListItem>
              </List>
            </Collapse>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Material2" />
                  Qty: 1
                </ListItem>
              </List>
            </Collapse>
            <ListItem>Produk2</ListItem>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Material2" />
                  Qty: 1
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item>
          <Tombol>Buat Pesanan</Tombol>
        </Grid>
      </Grid>
    </Container>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
