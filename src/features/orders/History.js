import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Grid } from "@material-ui/core";
import HeadTitle from "../../components/HeadTitle";
import TextFieldKuning from "../../components/TextFieldKuning";
import Tombol from "../../components/Button";
import Image from "material-ui-image";
import noImage from "./no-image.jpg";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(nama, harga, qty, bahan, pencetak) {
  return { nama, harga, qty, bahan, pencetak };
}

const rows = [
  createData("Solidified Human", 200, 1, "Logam", "John Doe"),
  createData("Ice cream sandwich", 237, 9, "Plastik", "John Doe"),
  createData("Eclair", 262, 16, "Plastik", "John Doe"),
  createData("Cupcake", 305, 3, "Logam", "John Doe"),
  createData("Gear Mechanism", 356, 16, "Plastik", "John Doe"),
];

export default function HistoryPage() {
  const classes = useStyles();

  return (
    <Container>
      <HeadTitle top="HISTORY" bottom="TRANSAKSI" />
      
      <Grid Container spacing={2}>
        <Paper background-color="white">
        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nama Pesanan</TableCell>
                  <TableCell align="right">Harga</TableCell>
                  <TableCell align="right">Qty&nbsp;</TableCell>
                  <TableCell align="right">Bahan&nbsp;</TableCell>
                  <TableCell align="right">Pencetak&nbsp;</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.nama}>
                    <TableCell component="th" scope="row">
                      {row.nama}
                    </TableCell>
                    <TableCell align="right">{row.harga}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.bahan}</TableCell>
                    <TableCell align="right">{row.pencetak}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Grid>
            
            
        </Paper>
        <Grid item>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Tombol>Kembali</Tombol>
        </Grid></Grid>
          </Grid>
        </Grid>
    </Container>
  );
}
