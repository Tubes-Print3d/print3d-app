import React from "react";
import PropTypes from "prop-types";
import { Container } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

import SideNav from "./SideNav";
import HeadTitle from "../../components/HeadTitle";
import Navbar from "../../components/Navbar";

function Percetakan(props) {
  const history = useHistory();

  const { kelola } = useParams();

  return (
    <Container>
      <Navbar />
      <HeadTitle top="PERCETAKAN" bottom={`KELOLA ${kelola.toUpperCase()}`} />
      <SideNav />
      <Container>Konten Percetakan</Container>
    </Container>
  );
}

Percetakan.propTypes = {};

export default Percetakan;
