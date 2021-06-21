import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import { Dialog, Grid, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

import useStyles from "./styles";
import MainForm from "./MainForm";
import PencetakForm from "./PencetakForm";

import Tombol from "../../../components/Button";
import api from "../../../utils/api";

function LoginDialog({ open, onClose, registerMode, ...props }) {
  const classes = useStyles();
  const [formStep, setFormStep] = useState(0);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    nama: "John Doedoe",
    email: "joni1@gmail.com",
    password: "`WCV&q48/PY54Lte",
    rePassword: "`WCV&q48/PY54Lte",
    roles: ["desainer"],
    listMaterial: ["Resin", "Polyester"],
    alamat: {
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      kodepos: "40256",
      alamat: "Universitas Telkom, Jl. Telekomunikasi No.1",
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
          listMaterial: values.listMaterial.map((jenis) => ({
            jenis,
            tersedia: true,
          })),
        };
        delete packed["rePassword"];
        if (!values.roles.includes("pencetak")) {
          delete packed.listMaterial;
          delete packed.alamat;
        }
        try {
          const response = await api.post("/v1/users/register", packed);
          enqueueSnackbar(`Selamat datang, ${response.data.payload.nama}`, {
            variant: "success",
          });
          history.push("/produk");
        } catch (error) {
          for (const err of error.response.data.error) {
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
          const response = await api.post("/v1/users/login", values);
          enqueueSnackbar(
            `Selamat datang kembali, ${response.data.payload.nama}`,
            { variant: "success" }
          );
          history.push("/produk");
        } catch (error) {
          enqueueSnackbar(error.response.data.error.msg, { variant: "error" });
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
