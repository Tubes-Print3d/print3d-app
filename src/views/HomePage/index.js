import { Container, Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";
import berandaImg from "./beranda.png";
import RegisterForm from "../../features/profile/RegisterForm";
import Button from "../../components/Button";

const useStyle = makeStyles((theme) => ({
  root: {
    background: `url(${berandaImg}), ${theme.palette.primary.main}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    minHeight: "100vh",
    overflow: "auto",
  },
  row1: {
    marginTop: theme.spacing(6),
  },
}));

function HomePage() {
  const classes = useStyle();
  const [loginDialog, setLoginDialog] = React.useState(false);
  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.row1} spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="contained" component={Link} to="/wishlist">
              Wishlist
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" component={Link} to="/produk">
              Cari Produk
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item>
            <Button variant="lined" onClick={(e) => setLoginDialog(true)}>
              DAFTAR
            </Button>
          </Grid>
          <Grid item>
            <Button variant="lined">LOGIN</Button>
          </Grid>
        </Grid>
        <RegisterForm
          open={loginDialog}
          onClose={(e) => {
            setLoginDialog(false);
          }}
        />
      </Container>
    </div>
  );
}

export default HomePage;
