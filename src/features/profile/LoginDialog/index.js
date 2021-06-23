import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { Dialog, Grid, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import MainForm from "./MainForm";
import PencetakForm from "./PencetakForm";

import Tombol from "../../../components/Button";
import { useLoginMutation, useRegisterMutation } from "../profile.api";
import { setCredentials } from "../profile.slice";

function LoginDialog({ open, onClose, registerMode, ...props }) {
  const classes = useStyles();

  const [formStep, setFormStep] = useState(0);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();

  const initialValues = {
    nama: "",
    email: "",
    password: "",
    rePassword: "",
    roles: [],
    // listMaterial: [],
    alamat: {
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      kodepos: "",
      alamat: "",
      koordinat: {
        coordinates: [502, 300],
      },
    },
  };

  const yup = {
    email: Yup.string()
      .email("E-mail tidak valid")
      .required("E-mail tidak boleh kosong"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Harus terdiri dari minimal 8 karakter, 1 huruf kapital, 1 huruf non kapital, satu angka, dan satu simbol"
      )
      .required("Password tidak boleh kosong"),
  };

  const formikSetup = {
    register: {
      initialValues,
      validationSchema: Yup.object({
        nama: Yup.string().required("Nama tidak boleh kosong"),
        email: yup.email,
        password: yup.password,
        rePassword: Yup.string()
          .required("Kolom ini tidak boleh kosong")
          .oneOf([Yup.ref("password"), null], "Password tidak sama"),
      }),
      onSubmit: async (values) => {
        const packed = {
          ...values,
        };
        delete packed["rePassword"];
        if (!values.roles.includes("pencetak")) {
          // delete packed.listMaterial;
          delete packed.alamat;
        }
        try {
          const payload = await register(packed).unwrap();
          dispatch(setCredentials(payload));
          enqueueSnackbar(`Selamat datang, ${payload.nama}`, {
            variant: "success",
          });
          history.push(
            history.location.state?.from
              ? history.location.state.from.pathname
              : "/produk"
          );
        } catch (error) {
          for (const err of error.data.error) {
            enqueueSnackbar(err.msg, { variant: "error" });
          }
        }
      },
    },
    login: {
      initialValues: {
        email: initialValues.email,
        password: initialValues.password,
      },
      validationSchema: Yup.object({ ...yup }),
      onSubmit: async (values) => {
        try {
          const payload = await login(values).unwrap();
          dispatch(setCredentials(payload));
          enqueueSnackbar(`Selamat datang kembali, ${payload.nama}`, {
            variant: "success",
          });
          history.push(
            history.location.state?.from
              ? history.location.state.from.pathname
              : "/produk"
          );
        } catch (error) {
          enqueueSnackbar(error.data.error.msg, { variant: "error" });
        }
      },
    },
  };

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.paper }}
      maxWidth="sm"
      fullWidth={true}
    >
      <Formik {...(registerMode ? formikSetup.register : formikSetup.login)}>
        {(formik) => (
          <Form>
            <Grid
              container
              direction="column"
              alignContent="center"
              spacing={3}
              id="simple-dialog-title"
              className={classes.formBody}
            >
              <Grid item>
                <Typography
                  variant="h2"
                  color="primary"
                  className={classes.title}
                >
                  {registerMode ? "DAFTAR" : "MASUK"}
                </Typography>
              </Grid>
              <Grid container item spacing={2}>
                {formStep === 0 ? (
                  <MainForm registerMode={registerMode} />
                ) : (
                  <PencetakForm formik={formik} />
                )}
              </Grid>
              <Grid container item justify="flex-end">
                {formStep > 0 && (
                  <Grid item style={{ marginRight: "auto" }}>
                    <Tombol
                      variant="outlined"
                      onClick={(e) => setFormStep((x) => x - 1)}
                    >
                      Kembali
                    </Tombol>
                  </Grid>
                )}
                <Grid item>
                  <Tombol
                    variant="contained"
                    onClick={(e) => {
                      if (
                        formStep === 0 &&
                        formik.values.roles &&
                        formik.values.roles.includes("pencetak")
                      ) {
                        setFormStep(1);
                      } else {
                        formik.handleSubmit();
                      }
                    }}
                  >
                    {formStep === 0 &&
                    formik.values.roles &&
                    formik.values.roles.includes("pencetak")
                      ? "Selanjutnya >>"
                      : "Submit"}
                  </Tombol>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

LoginDialog.default = {
  registerMode: false,
};

LoginDialog.propTypes = {
  open: PropTypes.bool,
  registerMode: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LoginDialog;
