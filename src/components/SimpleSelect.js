import React from "react";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { Field } from "formik";
import { Select } from "formik-material-ui";

const useStyles = makeStyles((theme) => ({
  textFieldCustom: {
    "& .MuiInputBase-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-underline": {
      "&:before, &:hover::before": {
        borderBottomColor: theme.palette.primary.main,
      },
      "& .MuiSelect-icon:not(.Mui-disabled)": {
        color: theme.palette.primary.main,
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      color: theme.palette.primary.main,
      "& fieldset, &:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiFormHelperText-root:not(.Mui-error)": {
      color: theme.palette.primary.main,
    },
  },
}));

const SimpleSelect = ({ items, label, ...props }) => {
  const classes = useStyles();
  const id = `${props.name}-${uuidv4()}`;
  return (
    <FormControl className={classes.textFieldCustom} fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Field component={Select} inputProps={{ id }} {...props}>
        {items.map((label, i) => (
          <MenuItem value={label} key={i}>
            {label}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  );
};

export default SimpleSelect;
