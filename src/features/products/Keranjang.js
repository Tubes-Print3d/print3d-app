import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import noImage from "./no-image.jpg";
import Tombol from "../../components/Button";
import { Container, Grid, Paper, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
  },
  Paper: {
    background: "white",
    width: 720,
    maxWidth: 580,
  },
  grid: {
    width: "100%",
    padding: theme.spacing(3),
    margin: 0,
  },
  Typography: {
    color: "black",
  },
}));

export default function Keranjang() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container>
         <Grid container justify="center">
        <Box mt={9}>
          <Paper className={classes.Paper}>
            <Grid
              className={classes.grid}
              container
              direction="column"
              alignItems="center"
              spacing={2}
            >
            <Typography className={classes.Typography} variant ="h3"> <b><i>Keranjang</i></b></Typography>
                </Grid>
            
      <List dense className={classes.root} width="720
      ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem key={value} button>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${value + 1}`} Image src={noImage} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Contoh Produk ${value + 1}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      </Paper>
      <Grid container justify='flex-end'>
      <Tombol spacing={2}>Checkout</Tombol>
      </Grid>
      </Box>
      </Grid>
    </Container>
  );
}
