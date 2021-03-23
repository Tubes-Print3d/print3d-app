import * as React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hitam.main,
    backgroundSize: "100%",
    minHeight: "100vh",
    overflow: "auto",
    color: "#ffffff",
  },
  containerJudul: { textAlign: "center", margin: theme.spacing(4) },
  teks: {
    color: theme.palette.primary.main,
  },
  garis: {
    stroke: theme.palette.primary.main,
    "stroke-width": theme.spacing(0.5),
  },
}));

function ProfilPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.containerJudul}>
          <Typography className={classes.teks}>UBAH</Typography>
          <svg height={4} width={100}>
            <line className={classes.garis} x1={0} y1={0} x2={100} y2={0} />
          </svg>
          <Typography className={classes.teks}>PROFIL</Typography>
        </div>
      </Container>
    </div>
  );
}

export default ProfilPage;
