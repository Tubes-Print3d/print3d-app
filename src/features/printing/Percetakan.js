import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import { useHistory, Route, Switch, useParams } from "react-router-dom";

import SideNav from "./SideNav";
import KelolaPesanan from "./KelolaPesanan";
import KelolaMesin from "./KelolaMesin";
import KelolaBahan from "./KelolaBahan";
import HeadTitle from "../../components/HeadTitle";
import Navbar from "../../components/Navbar";
import { usePengguna } from "../../hooks/pengguna";
import { useSnackbar } from "notistack";

function Percetakan(props) {
  const history = useHistory();
  const { kelola } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const pengguna = usePengguna();
  if (!pengguna?.data?.roles.includes("pencetak")) {
    enqueueSnackbar("Maaf, anda belum terdaftar sebagai pencetak", {
      variant: "error",
      preventDuplicate: true,
    });
    history.goBack();
  }

  return (
    <Container>
      <Navbar />
      <HeadTitle top="PERCETAKAN" bottom={`KELOLA ${kelola.toUpperCase()}`} />
      <SideNav />
      <Grid container>
        <Switch>
          <Route children={<KelolaPesanan />} path="/percetakan/pesanan" />
          <Route children={<KelolaBahan />} path="/percetakan/bahan" />
          <Route children={<KelolaMesin />} path="/percetakan/mesin" />
        </Switch>
      </Grid>
    </Container>
  );
}

Percetakan.propTypes = {};

export default Percetakan;
