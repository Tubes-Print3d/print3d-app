import * as React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  tombolGaris: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
    padding: `2px ${theme.spacing(2)}px`,
  },
}));
/**
 * Deskripsi: Komponen yang berfungsi sebagai checkbox MuiCheckbox
 * dan mengubahnya sesuai dengan style Checkbox pada DPPL bab 3.6
 *
 * Input: Menerima props seperti pada MuiCheckbox
 *
 * Output: Mengembalikan Checkbox yang telah memiliki style yang sesuai
 */
function Tombol({ children, variant, ...props }) {
  const classes = useStyles();
  if (variant === "lined") {
    return (
      <Button className={classes.tombolGaris} {...props}>
        <i>{children}</i>
      </Button>
    );
  }

  return (
    <Button
      className={classes.tombol}
      variant={variant || "contained"}
      {...props}
    >
      <Typography>
        <i>
          <b>{children}</b>
        </i>
      </Typography>
    </Button>
  );
}

Tombol.defaultProps = {
  variant: "lined",
  color: "primary",
};

Tombol.propTypes = {
  /** Komponen di dalam button */
  children: PropTypes.node,
  /** Jenis tombol */
  variant: PropTypes.oneOf(["lined", "contained", "outlined", "text"]),
  /** Warna */
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "default",
    "disabled",
    "link",
  ]),
};

export default Tombol;
