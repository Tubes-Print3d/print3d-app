import React from "react";
import PropTypes from "prop-types";
import { Grid, CircularProgress } from "@material-ui/core";

/**
 * Deskripsi: Komponen yang berfungsi sebagai animasi loading di page page tertentu
 * dan membuatnya sesuai dengan style halaman
 *
 * Input: Menerima props yang berupa loading
 * Output: Memberikan animasi Loading saat pergi ke halaman yang ditujukan
 */

function WithLoading({ loading, children, ...props }) {
  if (loading)
    return (
      <Grid container justify="center" {...props}>
        <Grid item component={CircularProgress} />
      </Grid>
    );

  return children;
}

WithLoading.defaultProps = {
  loading: false,
};
WithLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default WithLoading;
