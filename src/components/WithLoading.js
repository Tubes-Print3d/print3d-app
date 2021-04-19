import React from "react";
import PropTypes from "prop-types";
import { Grid, CircularProgress } from "@material-ui/core";

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
