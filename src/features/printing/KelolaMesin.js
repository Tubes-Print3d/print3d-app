import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { Field, Form, Formik } from "formik";

import Tombol from "../../components/Button";
import DataContainer from "../../components/DataContainer";
import {
  useAddMachineMutation,
  useDeleteMachinesMutation,
  useGetMyMachinesQuery,
} from "./printing.api";
import { usePengguna } from "../../hooks/pengguna";
import WithLoading from "../../components/WithLoading";
import TextFieldKuning from "../../components/TextFieldKuning";

const columns = [
  {
    field: "nama",
    headerName: "Mesin Cetak",
    flex: 2,
    editable: true,
  },
  {
    field: "spesifikasi",
    headerName: "Spesifikasi",
    flex: 3,
    editable: true,
  },
];

function KelolaMesin(props) {
  const pengguna = usePengguna();
  const { data: machines, isLoading } = useGetMyMachinesQuery(
    pengguna?.data?._id
  );
  const [addMachine] = useAddMachineMutation();
  const [deleteMachines] = useDeleteMachinesMutation();

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const defaultRows = isLoading
    ? []
    : machines.map((m, i) => ({ ...m, id: m._id }));
  // const [rows, setRows] = React.useState(defaultRows);
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
      <WithLoading isLoading={isLoading}>
        <DataContainer
          checkboxSelection
          disableSelectionOnClick
          rows={defaultRows}
          columns={columns}
          editRowsModel={editRowsModel}
          onEditRowModelChange={(params) => {
            setEditRowsModel((state) => ({ ...state, ...params.model }));
          }}
          // onEditCellChangeCommitted={({ id, field, props }) => {
          //   const updatedRows = rows.map((row) => {
          //     if (row.id === id) {
          //       return { ...row, [field]: props.value };
          //     }
          //     return row;
          //   });
          //   setRows(updatedRows);
          // }}
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection.selectionModel);
          }}
          selectionModel={selectionModel}
          action={
            <Grid container justify="flex-end" spacing={2}>
              {selectionModel.length > 0 && (
                <Grid item>
                  <Tombol
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      deleteMachines(selectionModel)
                        .unwrap()
                        .then((res) => {
                          enqueueSnackbar(
                            `${res.deletedCount} mesin berhasil dihapus`,
                            { variant: "success" }
                          );
                          setSelectionModel([]);
                        })
                        .catch((error) => {
                          enqueueSnackbar(error.data.error, {
                            variant: "error",
                          });
                          setSelectionModel([]);
                        });
                    }}
                  >
                    Hapus mesin
                  </Tombol>
                </Grid>
              )}
              <Grid item>
                <Tombol
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setDialogOpen(true);
                  }}
                >
                  Tambah mesin
                </Tombol>
              </Grid>
            </Grid>
          }
        />
      </WithLoading>
      <Dialog
        aria-labelledby="add-mesin-dialog"
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <Formik
          initialValues={{
            nama: "",
            spesifikasi: "",
          }}
          validationSchema={Yup.object({
            nama: Yup.string().required(),
            spesifikasi: Yup.string(),
          })}
          onSubmit={(values) => {
            addMachine(values)
              .unwrap()
              .then((res) => {
                enqueueSnackbar("Mesin berhasil ditambahkan", {
                  variant: "success",
                });
                setDialogOpen(false);
              })
              .catch((error) => {
                enqueueSnackbar(error.data.error, { variant: "error" });
                setDialogOpen(false);
              });
          }}
        >
          {(formik) => (
            <Form>
              <DialogTitle id="add-mesin-dialog">Tambah Mesin</DialogTitle>
              <DialogContent>
                <Grid container justify="center" direction="column">
                  <Grid item>
                    <Field
                      autoFocus
                      component={TextFieldKuning}
                      name="nama"
                      label="Nama mesin"
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      component={TextFieldKuning}
                      name="spesifikasi"
                      label="Spesifikasi"
                      multiline
                      rows={3}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Tombol variant="outlined" type="submit">
                  Submit
                </Tombol>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}

KelolaMesin.propTypes = {};

export default KelolaMesin;
