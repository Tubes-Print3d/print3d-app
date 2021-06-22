import React from "react";
import { Grid, Container } from "@material-ui/core";
import Image from "material-ui-image";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import noImage from "./no-image.jpg";
import TextFieldKuning from "../../components/TextFieldKuning";
import HeadTitle from "../../components/HeadTitle";
import { usePengguna } from "../../hooks/pengguna";
import Tombol from "../../components/Button";
import { useAddProductMutation } from "./products.api";
import { useSnackbar } from "notistack";

function ProductForm({ ...props }) {
  const readOnly = false;

  const { data: dataPengguna } = usePengguna();

  const { location, ...history } = useHistory();
  const title = location.pathname.match(/\/\w*\/(tambah|ubah)/)[1];

  const [addProduct] = useAddProductMutation();

  const { enqueueSnackbar } = useSnackbar();

  const formikSetup = {
    initialValues: {
      nama: "",
      royalty: null,
      deskripsi: "",
      pemilik: dataPengguna?.nama,
    },
    validationSchema: Yup.object({
      nama: Yup.string().required(),
      royalty: Yup.number()
        .typeError("Royalti harus berupa angka")
        .min(0)
        .required("Penting"),
      deskripsi: Yup.string(),
    }),
    onSubmit: async (values) => {
      const packet = { ...values };
      delete packet.pemilik;
      try {
        const data = await addProduct(packet).unwrap();
        enqueueSnackbar("Produk berhasil ditambahkan", { variant: "success" });
        history.push("/produk");
      } catch (error) {
        enqueueSnackbar(error.data?.error, { variant: "error" });
      }
    },
  };

  return (
    <Container>
      <HeadTitle top={title.toUpperCase()} bottom="PRODUK" />
      <Formik {...formikSetup}>
        {(formik) => (
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <Image src={noImage} />
            </Grid>
            <Grid item md={7}>
              <Form style={{ height: "100%" }}>
                <Grid
                  container
                  direction="column"
                  justify="space-between"
                  style={{ height: "100%" }}
                >
                  <Grid item>
                    <Grid container direction="column" spacing={3}>
                      <Grid item>
                        <Grid container spacing={3}>
                          <Grid item md={6}>
                            <Field
                              component={TextFieldKuning}
                              name="nama"
                              label="Nama Produk"
                            />
                          </Grid>
                          <Grid item md={6}>
                            <Field
                              component={TextFieldKuning}
                              label="Royalti"
                              name="royalty"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Field
                          component={TextFieldKuning}
                          multiline
                          rows={5}
                          label="Deskripsi"
                          name="deskripsi"
                          readOnly={readOnly}
                        />
                      </Grid>
                      <Grid item>
                        <Grid container spacing={3}>
                          <Grid item md={6}>
                            <Field
                              component={TextFieldKuning}
                              label="Pemilik"
                              name="pemilik"
                              readOnly={true}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justify="flex-end"
                    style={{ paddingRight: 16 }}
                  >
                    <Tombol type="submit" variant="outlined">
                      SUBMIT
                    </Tombol>
                  </Grid>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        )}
      </Formik>
    </Container>
  );
}

export default ProductForm;
