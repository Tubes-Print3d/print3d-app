import React from "react";
import PropTypes from "prop-types";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import CategoryIcon from "@material-ui/icons/Category";

import { useDrawer } from "../../hooks/percetakan";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
}));

function SideNav(props) {
  const classes = useStyles();

  const { drawerState } = useDrawer();
  const history = useHistory();

  const goto = (loc) => () => {
    history.push(`/percetakan${loc}`);
    // drawerState.onClose();
  };

  return (
    <Drawer {...drawerState}>
      <div role="presentation" className={classes.root}>
        <List>
          <ListItem>
            <ListItemText
              primary="DASHBOARD"
              secondary="Percetakan"
              color="primary"
            />
          </ListItem>
          <Divider />
          <ListItem button onClick={goto("/pesanan")}>
            <ListItemIcon color="primary">
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Pesanan" />
          </ListItem>
          <Divider />
          <ListItem button onClick={goto("/mesin")}>
            <ListItemIcon color="primary">
              <LocalPrintshopIcon />
            </ListItemIcon>
            <ListItemText primary="Kelola mesin" />
          </ListItem>
          <ListItem button onClick={goto("/bahan")}>
            <ListItemIcon color="primary">
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Kelola bahan" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

SideNav.propTypes = {};

export default SideNav;
