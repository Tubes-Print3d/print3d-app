import React from "react";
import PropTypes from "prop-types";
import { Grid, CircularProgress } from "@material-ui/core";

/** Komponen wrapper yang berfungsi untuk me-render animasi loading
 * apabila props `loading` bernilai `true`. Jika tidak maka render
 * komponen anaknya.
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
  /** Indikator penanda sedang loading atau tidak */
  loading: PropTypes.bool.isRequired,
  /** Komponen lain yan ingin di-render */
  children: PropTypes.node,
};

export default WithLoading;
