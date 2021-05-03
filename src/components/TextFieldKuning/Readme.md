Contoh `TextFieldKuning` dengan `readOnly={false}`.

```jsx
import * as React from "react";
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

<ThemeProvider theme={theme}>
  <CssBaseline />
  <TextFieldKuning label="TextField Kuning Biasa" />
</ThemeProvider>;
```

Contoh `TextFieldKuning` dengan `readOnly={true}`.

```jsx
import * as React from "react";
import theme from "../../theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

<ThemeProvider theme={theme}>
  <CssBaseline />
  <TextFieldKuning
    readOnly
    label="Text Field Kuning ReadOnly"
    defaultValue="Nilai default tidak bisa diubah!"
  />
</ThemeProvider>;
```
