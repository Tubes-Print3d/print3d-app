import * as React from "react";
import { useState, useEffect } from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import SimpleSelect from "../../../components/SimpleSelect";
import api from "../../../utils/api";

function PencetakForm({ formik, ...props }) {
  const classes = useStyles();
  const alamat = formik.values.alamat;
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);
  const [daftarKabupaten, setDaftarKabupaten] = useState([]);
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);

  // console.debug({ daftarProvinsi, daftarKabupaten, daftarKecamatan });
  console.debug(alamat);

  // GET provinsi
  useEffect(() => {
    (async () => {
      const response = await api.get(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      setDaftarProvinsi(response.data.provinsi);
    })();
  }, []);

  // GET kabupaten/kota
  useEffect(() => {
    (async () => {
      const provinsi = daftarProvinsi.find((p) => p.nama === alamat.provinsi);
      if (provinsi) {
        const response = await api.get(
          `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsi.id}`
        );
        setDaftarKabupaten(response.data.kota_kabupaten);
      }
    })();
  }, [daftarProvinsi, alamat.provinsi]);

  // GET kecamatan
  useEffect(() => {
    (async () => {
      const kecamatan = daftarKabupaten.find(
        (p) => p.nama === alamat.kabupaten
      );
      if (kecamatan) {
        const response = await api.get(
          `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kecamatan.id}`
        );
        setDaftarKecamatan(response.data.kecamatan);
      }
    })();
  }, [daftarKabupaten, alamat.provinsi, alamat.kabupaten]);

  return (
    <>
      <Grid
        container
        className={classes.bottomContainer}
        spacing={2}
        direction="row"
      >
        <Grid item xs={12}>
          <Typography className={classes.subheader}>Alamat</Typography>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={1}
          className={classes.alamatWrapper}
        >
          <Grid item xs={12}>
            <SimpleSelect
              label="Pilih Provinsi"
              name="alamat.provinsi"
              items={daftarProvinsi.map((v) => v.nama)}
            />
          </Grid>
          <Grid item xs={12}>
            <SimpleSelect
              label="Pilih Kabupaten"
              name="alamat.kabupaten"
              items={daftarKabupaten.map((v) => v.nama)}
              disabled={!alamat.provinsi}
            />
          </Grid>
          <Grid item xs={12}>
            <SimpleSelect
              label="Pilih Kecamatan"
              name="alamat.kecamatan"
              items={daftarKecamatan.map((v) => v.nama)}
              disabled={!alamat.kabupaten}
            />
          </Grid>
          <Grid item>
            <Field
              component={TextField}
              className={classes.textFieldCustom}
              name="alamat.kodepos"
              label="Kode pos"
            />
          </Grid>
          <Grid item xs={12} style={{ marginTop: 8 }}>
            <Field
              component={TextField}
              className={classes.textFieldCustom}
              name="alamat.alamat"
              label="Alamat"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

PencetakForm.propTypes = {};

export default PencetakForm;
