import React from "react";
import { FormControlLabel, Checkbox, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 9,
    width: "100%",
    margin: 0,
    "& .MuiCheckbox-root": {
      color: theme.palette.primary.main,
    },
  },
}));

const CheckButton = ({ ...props }) => {
  const {
    form: { setFieldValue, values },
    field: { name, value },
  } = props;
  const classes = useStyles();

  return (
    <FormControlLabel
      className={classes.root}
      control={<Checkbox name={props.name} />}
      label={props.label}
      checked={values[name]?.includes(value)}
      onChange={(e, checked) => {
        if (checked) {
          setFieldValue(name, [...values[name], value]);
        } else {
          setFieldValue(
            name,
            values[name].filter((v) => v !== value)
          );
        }
      }}
    />
  );
};

CheckButton.propTypes = {};

export default CheckButton;
