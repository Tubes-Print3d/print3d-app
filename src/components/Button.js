import * as React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tombolGaris: {
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
    padding: `2px ${theme.spacing(2)}px`,
  },
}));

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
    >
      <Typography>
        <i>
          <b>{children}</b>
        </i>
      </Typography>
    </Button>
  );
}

export default Tombol;
