import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

import useStyles from "./styles";
import CheckButton from "../../../components/CheckButton";

function MainForm({ registerMode, ...props }) {
  const classes = useStyles();

  return (
    <>
      {registerMode && (
        <Grid item xs={12}>
          <Field
            autoFocus
            component={TextField}
            name="nama"
            className={classes.textFieldCustom}
            label="Nama lengkap"
            variant="standard"
            fullWidth
          />
        </Grid>
      )}
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="email"
          className={classes.textFieldCustom}
          label="Email"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name="password"
          className={classes.textFieldCustom}
          label="Kata sandi"
          variant="standard"
          type="password"
          fullWidth
        />
      </Grid>
      {registerMode && (
        <>
          <Grid item xs={12}>
            <Field
              component={TextField}
              name="rePassword"
              className={classes.textFieldCustom}
              label="Ulang kata sandi"
              variant="standard"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid container className={classes.bottomContainer} spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.subheader}>
                Daftar sebagai:
              </Typography>
            </Grid>
            <Grid
              container
              className={classes.checkboxWrapper}
              justify="space-evenly"
              spacing={2}
            >
              <Grid item xs={6}>
                <Field
                  component={CheckButton}
                  type="checkbox"
                  name="roles"
                  value="desainer"
                  label="Desainer"
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={CheckButton}
                  type="checkbox"
                  name="roles"
                  value="pencetak"
                  label="Pencetak"
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

MainForm.default = {
  registerMode: false,
};

MainForm.propTypes = {
  registerMode: PropTypes.bool,
};

export default MainForm;
