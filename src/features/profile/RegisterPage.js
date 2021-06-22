import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography, Box } from "@material-ui/core";
import HeadTitle from "../../components/HeadTitle";
import Tombol from "../../components/Button";
import TextFieldKuning from "../../components/TextFieldKuning";
import CheckboxLabels from "../../components/Checkbox";

const useStyles = makeStyles((theme) => ({
  Paper: {
    background: "white",
    width: 780,
  },
  Typography: {
    color: "black",
  },
  grid: {
    width: "100%",
    padding: theme.spacing(3),
    margin: 0,
  },
}));

export default function RegisterPage() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container justify="center">
        <Box mt={5}>
          <Paper className={classes.Paper}>
            <Grid
              className={classes.grid}
              container
              direction="column"
              alignItems="center"
              spacing={1}
            >
              <HeadTitle
                className={classes.Typography}
                top="HALAMAN"
                bottom="LOGIN"
              />
              <Grid item>
                <TextFieldKuning label="Email" />
              </Grid>
              <Grid item>
                <TextFieldKuning label="Password" input type="password" />
              </Grid>
              <Grid item justify = "flex-start" direction="column">
                <Typography className={classes.Typography}>
                  Belum ada akun? daftar disini
                </Typography>
              </Grid>
              <Grid>
                <Grid>
                  <CheckboxLabels />
                  <Typography className={classes.Typography}>
                    Desainer
                  </Typography>
                </Grid>
                <Grid>
                  <CheckboxLabels />
                  <Typography className={classes.Typography}>
                    Pencetak
                  </Typography>
                </Grid>
              </Grid>
              <Grid item justify="center">
                <Tombol>Login</Tombol>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
}
