import React from "react";
import { withStyles, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { fieldToTextField } from "formik-material-ui";

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
  textField: {
    "& .Mui-disabled": {
      "&.MuiInputBase-root": {
        color: "rgba(0,0,0,0.5)",
      },
      "&.MuiFormLabel-root": {
        color: "rgba(255, 187, 0, .8)",
      },
    },
  },
});

/**
 * Komponen yang berfungsi sebagai wrapper bagi textfield MuiTextField
 * dan mengubahnya sesuai dengan style TextField pada DPPL bab 3.6 (Tambah Produk).
 */
const TextFieldKuning = ({ classes, readOnly, ...props }) => {
  const { form, field } = props;
  const onChange = React.useCallback(
    (event) => {
      form.setFieldValue(field.name, event.target ? event.target : "");
    },
    [form, field]
  );

  return (
    <TextField
      className={classes.textField}
      onChange={onChange}
      {...fieldToTextField(props)}
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
    />
  );
};

TextFieldKuning.defaultProps = {
  readOnly: false,
};

TextFieldKuning.propTypes = {
  /** Untuk styling dari withstyles.
   * @ignore
   */
  classes: PropTypes.object,
  /** Komponen berfungsi hanya untuk menampilkan data */
  readOnly: PropTypes.bool,
};

export default withStyles(styles)(TextFieldKuning);
