import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  containerJudul: { textAlign: "center", margin: theme.spacing(4) },
  teks: {
    color: theme.palette.primary.main,
  },
  garis: {
    stroke: theme.palette.primary.main,
    "stroke-width": theme.spacing(0.5),
  },
}));

function HeadTitle({ top, bottom }) {
  const classes = useStyles();
  return (
    <div className={classes.containerJudul}>
      <Typography className={classes.teks}>{top}</Typography>
      <svg height={4} width={100}>
        <line className={classes.garis} x1={0} y1={0} x2={100} y2={0} />
      </svg>
      <Typography className={classes.teks}>{bottom}</Typography>
    </div>
  );
}

HeadTitle.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string
}

export default HeadTitle;
