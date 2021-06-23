import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Container} from "@material-ui/core"
import Paper from "@material-ui/core/Paper";
import HeadTitle from "../../components/HeadTitle";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(nama, harga, bahan, pencetak) {
  return { nama, harga, bahan, pencetak };
}

const rows = [
  createData("Solidified Human", 200,  "Logam", "John Doe"),
  createData("Ice cream sandwich", 237,  "Plastik", "John Doe"),
  createData("Eclair", 262, "Plastik", "John Doe"),
  createData("Cupcake", 305, "Logam", "John Doe"),
  createData("Gear Mechanism", 356, "Plastik", "John Doe"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function HistoryPage() {
  const classes = useStyles();

  return (
  <div>
    <HeadTitle top="HISTORI" bottom="TRANSAKSI" />
    <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nama Pesanan</StyledTableCell>
            <StyledTableCell align="right">Harga</StyledTableCell>
            <StyledTableCell align="right">Bahan&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Pencetak&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nama}>
              <StyledTableCell component="th" scope="row">
                {row.nama}
              </StyledTableCell>
              <StyledTableCell align="right">{row.harga}</StyledTableCell>
              <StyledTableCell align="right">{row.bahan}</StyledTableCell>
              <StyledTableCell align="right">{row.pencetak}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
