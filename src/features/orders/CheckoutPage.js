import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import HeadTitle from "../../components/HeadTitle";
import Navbar from "../../components/Navbar";
import { Field, Form, Formik } from "formik";
import TextFieldKuning from "../../components/TextFieldKuning";
import DataContainer from "../../components/DataContainer";
import Tombol from "../../components/Button";
import SimpleSelect from "../../components/SimpleSelect";
import { useKeranjang } from "../../hooks/pengguna";
import { useGetKeranjangQuery } from "../profile/profile.api";
import WithLoading from "../../components/WithLoading";
import { useGetMachinesQuery } from "../printing/printing.api";
import { useSnackbar } from "notistack";

function CheckoutPage(props) {
  const { data, isLoading } = useGetKeranjangQuery();
  const keranjang = data || [];

  const { data: machines, isLoading: machinesIsLoading } =
    useGetMachinesQuery();
  console.debug({ machines, machinesIsLoading });
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleEditRowModelChange = React.useCallback((params) => {
    setEditRowsModel(params.model);
  }, []);

  if (isLoading) return null;

  const listMaterial = [
    { _id: "29359323230822", nama: "Cellulose", warna: "hijau" },
    { _id: "29359323230821", nama: "Plastik", warna: "kuning" },
    { _id: "29359323230820", nama: "Polyester", warna: "merah" },
  ];

  const columns = [
    { field: "nama", headerName: "Nama Produk", flex: 3 },
    {
      field: "bahan",
      headerName: "Material",
      flex: 2,
      editable: true,
      valueFormatter: ({ value }) => {
        return `${value.nama} ${value.warna}`;
      },
      renderEditCell: ({ id, value }) => {
        // return <TextField value={value.nama} />;
        return (
          <Field
            component={SimpleSelect}
            items={listMaterial.map((bahan) => `${bahan.nama} ${bahan.warna}`)}
            name={`listCetak.${id}.bahan`}
          />
        );
      },
    },
    {
      field: "kuantitas",
      headerName: "Qty",
      type: "number",
      flex: 1,
      editable: true,
    },
  ];

  const formikSetup = {
    onSubmit: (values) => {
      const formatted = { ...values };
      enqueueSnackbar("Belum diimplementasikan", { variant: "info" });
      console.debug(formatted);
    },
  };

  return (
    <Container>
      <Navbar />
      <HeadTitle top="BUAT" bottom="PESANAN" />
      <WithLoading isLoading={isLoading}>
        {keranjang !== undefined && (
          <Formik
            {...formikSetup}
            initialValues={{
              mesinCetak: null,
              alamatPengiriman: "",
              listCetak: keranjang?.map((item, id) => ({
                ...item,
                id,
                kuantitas: 1,
                bahan: {
                  _id: "29359323230820",
                  nama: "Polyester",
                  warna: "merah",
                },
              })),
            }}
          >
            {(formik) => (
              <Form>
                <Grid container justify="space-between" spacing={2}>
                  <Grid item xs={3}>
                    <Grid container direction="column" spacing={4}>
                      <Grid item>
                        <SimpleSelect
                          items={
                            !machinesIsLoading && machines
                              ? machines.map((mesin) => mesin.nama)
                              : []
                          }
                          label="Pilih mesin cetak"
                          name="mesinCetak"
                        />
                      </Grid>
                      <Grid item>
                        <Field
                          component={TextFieldKuning}
                          multiline
                          rows={5}
                          name="alamatPengiriman"
                          label="Alamat Pengiriman"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={9}>
                    <DataContainer
                      rows={formik.values.listCetak}
                      columns={columns}
                      editRowsModel={editRowsModel}
                      onEditRowModelChange={handleEditRowModelChange}
                      action={
                        <Grid container justify="flex-end" spacing={3}>
                          <Grid item>
                            <Tombol
                              variant="outlined"
                              onClick={() => {
                                history.go(-1);
                              }}
                            >
                              Batal
                            </Tombol>
                          </Grid>
                          <Grid item>
                            <Tombol variant="contained" type="submit">
                              Buat Pesanan
                            </Tombol>
                          </Grid>
                        </Grid>
                      }
                    />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        )}
      </WithLoading>
    </Container>
  );
}

CheckoutPage.propTypes = {};

export default CheckoutPage;
