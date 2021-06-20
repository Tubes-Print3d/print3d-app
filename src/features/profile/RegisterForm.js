import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import {
  Dialog,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@material-ui/core";
import Tombol from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(5) },
  formBody: {},
  title: {
    fontWeight: "bold",
    fontSize: 56,
    fontStyle: "italic",
    textAlign: "center",
  },
  paper: {
    background: "white",
    color: "black",
    padding: theme.spacing(5),
  },
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
      // border: `1px solid ${theme.palette.primary.main}`,
      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiFormHelperText-root": { color: theme.palette.primary.main },
  },
  subheader: {
    fontSize: 24,
    fontWeight: 600,
    fontStyle: "italic",
  },
  bottomContainer: {
    padding: theme.spacing(1),
  },
  checkboxCustom: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 9,
    width: "100%",
    margin: 0,
    "& .MuiCheckbox-root": {
      color: theme.palette.primary.main,
    },
  },
  checkboxWrapper: {
    padding: theme.spacing(0, 2),
  },
  alamatWrapper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(-4),
  },
}));

function CheckboxCustom({ name, ...props }) {
  const classes = useStyles();
  return (
    <FormControlLabel
      className={classes.checkboxCustom}
      control={<Checkbox name={name} />}
      label={props.label}
    />
  );
}

function SimpleSelect({ classes, items, ...props }) {
  return (
    <TextField select className={classes.textFieldCustom} fullWidth {...props}>
      {items.map((val, i) => (
        <MenuItem key={i} value={val}>
          {val}
        </MenuItem>
      ))}
    </TextField>
  );
}

function FormGroupMain({ classes, ...props }) {
  return (
    <Grid container item spacing={2}>
      <Grid item xs={12}>
        <TextField
          className={classes.textFieldCustom}
          label="Nama lengkap"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.textFieldCustom}
          label="Email"
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.textFieldCustom}
          label="Kata sandi"
          variant="standard"
          type="password"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.textFieldCustom}
          label="Ulang kata sandi"
          variant="standard"
          type="password"
          fullWidth
        />
      </Grid>
      <Grid container className={classes.bottomContainer} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.subheader}>Daftar sebagai:</Typography>
        </Grid>
        <Grid
          container
          className={classes.checkboxWrapper}
          justify="space-evenly"
          spacing={2}
        >
          <Grid item xs={6}>
            <CheckboxCustom name="c1" label="Desainer" />
          </Grid>
          <Grid item xs={6}>
            <CheckboxCustom name="c2" label="Pencetak" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function FormGroupPencetak({ classes, ...props }) {
  return (
    <Grid container item spacing={2}>
      <Grid item xs={12}>
        <TextField
          className={classes.textFieldCustom}
          label="Material yang tersedia"
          variant="standard"
          helperText="Pisahkan kata dengan koma"
          fullWidth
        />
      </Grid>
      <Grid container className={classes.bottomContainer} spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.subheader}>Alamat</Typography>
        </Grid>
        <Grid container className={classes.alamatWrapper}>
          <SimpleSelect
            classes={classes}
            label="Pilih Provinsi"
            items={["Jawa Barat", "Jawa Timur", "Riau", "Sumatera Utara"]}
          />
          <SimpleSelect
            classes={classes}
            label="Pilih Kabupaten"
            items={["Jawa Barat", "Jawa Timur", "Riau", "Sumatera Utara"]}
            disabled
          />
          <SimpleSelect
            classes={classes}
            label="Pilih Kecamatan"
            items={["Jawa Barat", "Jawa Timur", "Riau", "Sumatera Utara"]}
            disabled
          />
          <TextField className={classes.textFieldCustom} label="Kode pos" />
          <Grid item xs={12} style={{ marginTop: 16 }}>
            <TextField
              className={classes.textFieldCustom}
              label="Alamat"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function RegisterForm({ open, onClose, ...props }) {
  const classes = useStyles();
  const [formGroup, setFormGroup] = useState(1);
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.paper }}
      maxWidth="sm"
      fullWidth={true}
    >
      <Grid
        container
        direction="column"
        alignContent="center"
        spacing={3}
        id="simple-dialog-title"
        className={classes.formBody}
      >
        <Grid item>
          <Typography variant="h2" className={classes.title}>
            DAFTAR
          </Typography>
        </Grid>
        {formGroup == 1 ? (
          <FormGroupMain classes={classes} />
        ) : (
          <FormGroupPencetak classes={classes} />
        )}
        <Grid container item justify="flex-end">
          {formGroup > 1 && (
            <Grid item style={{ marginRight: "auto" }}>
              <Tombol
                variant="outlined"
                onClick={(e) => setFormGroup((x) => x - 1)}
              >
                {"Kembali"}
              </Tombol>
            </Grid>
          )}
          <Grid item>
            <Tombol
              variant="contained"
              onClick={(e) => setFormGroup((x) => x + 1)}
            >
              {"Selanjutnya >>"}
            </Tombol>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
