import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: orange[400],
    "&$checked": {
      color: orange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

/**
 * Deskripsi: Komponen yang berfungsi sebagai checkbox MuiCheckbox
 * dan mengubahnya sesuai dengan style Checkbox pada DPPL bab 3.6
 *
 * Input: Menerima props seperti pada MuiCheckbox
 *
 * Output: Mengembalikan Checkbox yang telah memiliki style yang sesuai
 */

export default function CheckboxLabels() {
  const [state, setState] = React.useState(true);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
          />
        }
      />
    </FormGroup>
  );
}
