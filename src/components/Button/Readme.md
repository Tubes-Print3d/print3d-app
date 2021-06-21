Contoh-contoh `Tombol`.

```jsx
import * as React from "react";
import theme from "../../theme";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

<ThemeProvider theme={theme}>
  <CssBaseline />
  <Grid container spacing={4} justify="center">
    <Grid item>
      <Tombol>
        <Typography color="textPrimary">Tombol Lined</Typography>
      </Tombol>
    </Grid>
    <Grid item>
      <Tombol variant="contained">
        <Typography color="textPrimary">Tombol Contained</Typography>
      </Tombol>
    </Grid>
    <Grid item>
      <Tombol variant="outlined">
        <Typography color="textPrimary">Tombol Outlined</Typography>
      </Tombol>
    </Grid>
  </Grid>
</ThemeProvider>;
```
