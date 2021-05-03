Contoh `HeadTitle`.

```jsx
import * as React from "react";
import theme from "../../theme";
import { CssBaseline, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

<ThemeProvider theme={theme}>
  <CssBaseline />
  <Grid container justify="center">
    <HeadTitle top="Hello" bottom="World!" />
  </Grid>
</ThemeProvider>;
```
