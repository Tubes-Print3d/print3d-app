import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  containerJudul: { textAlign: "center", margin: theme.spacing(10, 0, 6, 0) },
  teks: {
    color: theme.palette.primary.main,
    lineHeight: 0.6,
  },
  teksAtas: {
    lineHeight: 0.3,
  },
  garis: {
    stroke: theme.palette.primary.main,
    "stroke-width": theme.spacing(0.6),
  },
}));

/**
 * Deskripsi: Komponen yang berfungsi sebagai wrapper bagi Typography MuiTypography
 * dan mengubahnya sesuai dengan style Judul pada DPPL bab 3.6
 *
 * Input: Menerima props seperti pada MuiTypography
 *
 * Output: Mengembalikan Format judul typography yang telah memiliki style yang sesuai
 */

function HeadTitle({ top, bottom }) {
  const classes = useStyles();
  return (
    <div className={classes.containerJudul}>
      <Typography className={clsx(classes.teksAtas, classes.teks)} variant="h6">
        <i>{top}</i>
      </Typography>
      <svg height={5} width={100}>
        <line className={classes.garis} x1={0} y1={0} x2={100} y2={0} />
      </svg>
      <Typography className={classes.teks} variant="h6">
        <i>{bottom}</i>
      </Typography>
    </div>
  );
}

HeadTitle.propTypes = {
  /** Kalimat di baris pertama HeadTitle */
  top: PropTypes.string,
  /** Kalimat di baris kedua HeadTitle */
  bottom: PropTypes.string,
};

export default HeadTitle;
