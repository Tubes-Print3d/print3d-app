import * as React from "react";
import { Button as Tombol, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tombol: {
    boxShadow: "0 0",
  },
}));

function Button({ children, variant }) {
  const classes = useStyles();
  if (variant === "line") {
    return <Tombol>{children}</Tombol>;
  }
  return (
    <Tombol
      className={classes.tombol}
      variant={variant === "contained" ? variant : null}
      color="primary"
    >
      <Typography><b>{children}</b></Typography>
    </Tombol>
  );
}

export default Button;
