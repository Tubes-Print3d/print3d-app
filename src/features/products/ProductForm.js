import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Image from "material-ui-image";
import { Formik, Field, Form } from "formik";

import noImage from "./no-image.jpg";
import TextFieldKuning from "../../components/TextFieldKuning";
import Tombol from "../../components/Button";

function ProductForm({ actionComponent, formikSetup, ...props }) {
  return (
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
                            readOnly={props.readOnly}
                          />
                        </Grid>
                        <Grid item md={6}>
                          <Field
                            component={TextFieldKuning}
                            label="Royalti"
                            name="royalty"
                            readOnly={props.readOnly}
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
                        readOnly={props.readOnly}
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
                {actionComponent ? (
                  actionComponent
                ) : (
                  <Grid
                    container
                    justify="flex-end"
                    style={{ paddingRight: 16 }}
                  >
                    <Tombol type="submit" variant="outlined">
                      SUBMIT
                    </Tombol>
                  </Grid>
                )}
              </Grid>
            </Form>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
}

ProductForm.defaultProps = {
  formikSetup: {},
  readOnly: false,
};

ProductForm.propTypes = {
  readOnly: PropTypes.bool,
};

export default ProductForm;
