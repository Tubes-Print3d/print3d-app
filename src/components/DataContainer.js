import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "60vh",
    display: "flex",
    flex: 1,
    "& .MuiDataGrid-root": {
      color: theme.palette.primary.main,
      "& .MuiDataGrid-cell--editing": {
        backgroundColor: "unset",
      },
    },
  },
  action: {
    padding: theme.spacing(2, 3),
  },
}));

function DataContainer({ rows, columns, action, ...props }) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <div className={classes.root}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid rows={rows} columns={columns} {...props} />
          </div>
        </div>
      </Grid>
      <Grid item className={classes.action}>
        {action}
      </Grid>
    </Grid>
  );
}

DataContainer.propTypes = {};

export default DataContainer;
