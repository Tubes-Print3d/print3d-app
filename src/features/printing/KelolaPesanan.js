import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import Tombol from "../../components/Button";

import DataContainer from "../../components/DataContainer";

const rows = [
  {
    id: 1,
    mesinCetak: "Hello",
    listCetak: [
      {
        idProduk: "981381843298390",
        material: "300848219393209",
        kuantitas: 2,
      },
    ],
    alamatPengiriman: { alamat: "Jl. Menuju Kebenaran" },
  },
  {
    id: 2,
    mesinCetak: "XGrid",
    listCetak: [
      {
        idProduk: "981381843298390",
        material: "300848219393209",
        kuantitas: 2,
      },
    ],
    alamatPengiriman: { alamat: "Jl. Menuju Kebenaran" },
  },
  {
    id: 3,
    mesinCetak: "Material-UI",
    listCetak: [
      {
        idProduk: "981381843298390",
        material: "300848219393209",
        kuantitas: 2,
      },
    ],
    alamatPengiriman: { alamat: "Jl. Menuju Kebenaran" },
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID Pesanan",
    flex: 1,
  },
  {
    field: "mesinCetak",
    headerName: "Mesin Cetak",
    flex: 2,
  },
  {
    field: "listCetak",
    headerName: "Detail Pesanan",
    flex: 2,
    renderCell: ({ value }) => <p>Terdapat {value.length} item</p>,
  },
  {
    field: "alamatPengiriman",
    headerName: "Alamat",
    flex: 3,
    renderCell: ({ value }) => <p>{value.alamat}</p>,
  },
];

function KelolaPesanan(props) {
  return (
    <DataContainer
      rows={rows}
      columns={columns}
      action={
        <Grid container justify="flex-end">
          <Tombol variant="contained">Simpan Perubahan</Tombol>
        </Grid>
      }
    />
  );
}

KelolaPesanan.propTypes = {};

export default KelolaPesanan;
