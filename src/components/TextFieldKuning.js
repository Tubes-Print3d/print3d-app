import React from "react";
import { withStyles, TextField } from "@material-ui/core";

const styles = (theme) => ({
  label: {
    color: "black",
  },
  labelShrink: {
    color: theme.palette.primary.light,
    fontWeight: "bold",
    transform: "translate(10px, -20px) scale(.9) !important",
  },
  labelFocused: {
    fontWeight: "normal",
    transform: "translate(14px, -6px) scale(0.75) !important",
  },
  input: {
    background: theme.palette.primary.light,
    color: "black",
  },
  focused: {
    background: "none",
    color: theme.palette.primary.light,
  },
});

/**
 * Deskripsi: Komponen yang berfungsi sebagai wrapper bagi textfield MuiTextField
 * dan mengubahnya sesuai dengan style TextField pada DPPL bab 3.6 (Tambah Produk).
 *
 * Input: Menerima props seperti props pada MuiTextField.
 */
const TextFieldKuning = ({ classes, readOnly, ...props }) => {
  return (
    <TextField
      className={classes.textField}
      InputProps={{
        classes: {
          root: classes.input,
          focused: classes.focused,
        },
        readOnly: readOnly,
      }}
      InputLabelProps={{
        classes: {
          root: classes.label,
          focused: classes.labelFocused,
          shrink: classes.labelShrink,
        },
      }}
      fullWidth
      margin="dense"
      color="primary"
      variant="outlined"
      {...props}
    />
  );
};

export default withStyles(styles)(TextFieldKuning);
