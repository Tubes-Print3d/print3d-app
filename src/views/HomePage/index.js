import { Container, Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import berandaImg from "./beranda.png";
import LoginDialog from "../../features/profile/LoginDialog";
import Button from "../../components/Button";
import { useLoggedIn } from "../../hooks/pengguna";

const useStyle = makeStyles((theme) => ({
  root: {
    background: `url(${berandaImg}), ${theme.palette.background.default}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    minHeight: "100vh",
    overflow: "auto",
  },
  row1: {
    marginTop: theme.spacing(6),
  },
}));

function HomePage({ location }) {
  const classes = useStyle();
  const [dialogOpen, setDialogOpen] = useState(location.state?.login);
  const [dialogMode, setDialogMode] = useState("login");
  const isLoggedIn = useLoggedIn();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.row1} spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="outlined" disabled component={Link} to="/wishlist">
              Wishlist
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" component={Link} to="/produk">
              Cari Produk
            </Button>
          </Grid>
        </Grid>
        {!isLoggedIn && (
          <Grid container spacing={4}>
            <Grid item>
              <Button
                variant="lined"
                onClick={(e) => {
                  setDialogMode("register");
                  setDialogOpen(true);
                }}
              >
                DAFTAR
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="lined"
                onClick={(e) => {
                  setDialogMode("login");
                  setDialogOpen(true);
                }}
              >
                LOGIN
              </Button>
            </Grid>
          </Grid>
        )}
        <LoginDialog
          open={dialogOpen}
          onClose={(e) => {
            setDialogOpen(false);
          }}
          registerMode={dialogMode === "register"}
        />
      </Container>
    </div>
  );
}

export default HomePage;
