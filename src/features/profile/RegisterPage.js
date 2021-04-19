import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import HeadTitle from "../../components/HeadTitle";
import Tombol from "../../components/Button";
import TextFieldKuning from "../../components/TextFieldKuning";

const useStyles = makeStyles((theme) => ({
  Paper: {
    background: "white",
    width: 720,
    height: 350,
  },
  Typography: {
    color: "black",
  },
}));

export default function RegisterPage() {
  const classes = useStyles();

  return (
    <Container>
      <HeadTitle top="HALAMAN" bottom="LOGIN" />
      <Grid
        container justify="center">
        <Grid item>
          <Paper className={classes.Paper} xs={2} spacing={2}>
            <Grid container direction="column" alignItems="center" spacing={6} mt={10}>
              <Grid item>
                <TextFieldKuning label="Email" />
              </Grid>
              <Grid item>
                <TextFieldKuning label="Password" input type="password" />
              </Grid>
              <Grid item>
                <Typography className={classes.Typography}>
                  Belum ada akun? daftar disini
                </Typography>
              </Grid>
              <Grid item>
                <Tombol>Login</Tombol>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
