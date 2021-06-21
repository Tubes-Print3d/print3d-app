import * as React from "react";
import { useState, useEffect } from "react";
import { Field } from "formik";
import { TextField, Select } from "formik-material-ui";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

import useStyles from "./styles";
import api from "../../../utils/api";

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

// const daftarAlamat = [
//   {
//     nama: "Jawa Barat",
//     kabupaten: [{ nama: "Bandung", kecamatan: ["Bojongsoang"] }],
//   },
//   {
//     nama: "Riau",
//     kabupaten: [{ nama: "Rokan Hilir", kecamatan: ["Bagan Sinembah"] }],
//   },
// ];

function PencetakForm({ formik, ...props }) {
  const classes = useStyles();
  const alamat = formik.values.alamat;
  const [daftarProvinsi, setDaftarProvinsi] = useState([]);
  const [daftarKabupaten, setDaftarKabupaten] = useState([]);
  const [daftarKecamatan, setDaftarKecamatan] = useState([]);

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
      <Grid item xs={12}>
        <Field
          component={TextField}
          className={classes.textFieldCustom}
          label="Material yang tersedia"
          name="listMaterial"
          variant="standard"
          helperText="Pisahkan kata dengan koma"
          fullWidth
        />
      </Grid>
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
              // items={
              //   alamat.provinsi
              //     ? daftarAlamat
              //         .find((prov) => prov.nama === alamat.provinsi)
              //         ?.kabupaten.map((v) => v.nama)
              //     : []
              // }
              disabled={!alamat.provinsi}
            />
          </Grid>
          <Grid item xs={12}>
            <SimpleSelect
              label="Pilih Kecamatan"
              name="alamat.kecamatan"
              items={daftarKecamatan.map((v) => v.nama)}
              // items={
              //   alamat.kabupaten
              //     ? daftarAlamat
              //         .find((v) => v.nama === alamat.provinsi)
              //         ?.kabupaten.find((v) => v.nama === alamat.kabupaten)
              //         ?.kecamatan
              //     : []
              // }
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
