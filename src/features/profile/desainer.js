import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  Select,
  Box,
  MenuItem,
  Input,
} from "@material-ui/core";
import Image from "material-ui-image";
import Tombol from "../../components/Button";
import TextFieldKuning from "../../components/TextFieldKuning";
import HeadTitle from "../../components/HeadTitle";
import noImage from "./no-image.jpg";

const useStyles = makeStyles((theme) => ({
  Paper: {
    background: "white",
    width: 720,
    maxWidth: 1080,
  },
  grid: {
    width: "100%",
    padding: theme.spacing(3),
    margin: 0,
  },
  griditem: {
    width: "100%",
  },
}));

const names = ["AutoCAD", "Blender", "Cinema4D", "MMD"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DesainerPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <Container>
      <HeadTitle top="DAFTAR" bottom="DESAINER" />
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
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <Image src={noImage} />
                </Grid>
                <Grid>
                  <Grid item spacing={3}>
                    <Grid item>
                      <TextFieldKuning
                        label="About"
                        multiline
                        rowsMax={4}
                      ></TextFieldKuning>
                    </Grid>

                    <Grid item spacing={3}>
                      <TextFieldKuning label="Apps">
                        <Select
                          label="preffered apps"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<Input />}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                      </TextFieldKuning>
                    </Grid>
                  </Grid>
                  <Grid item justify="flex-end">
                    <Tombol>Submit</Tombol>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item justify="flex-start" direction="column">
              <Tombol>Upload Gambar</Tombol>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
}
