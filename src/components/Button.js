import * as React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import PropTypes from 'prop-types';

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
 * Output: Mengembalikan Checkbox yang telah memiliki style yang sesuai
 */
function Tombol({ children, ...props }) {
  const classes = useStyles();
  if (props.variant === "lined") {
    return (
      <Button className={classes.tombolGaris} color="primary">
        <i>{children}</i>
      </Button>
    );
  }
 
  return (
    <Button
      className={classes.tombol}
      variant={props.variant || "contained"}
      color="primary"
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
  
};
Tombol.propTypes = {
  children: PropTypes.node,
};

export default Tombol;
