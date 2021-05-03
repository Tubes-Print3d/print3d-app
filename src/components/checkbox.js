/**
 * Deskripsi: Komponen yang berfungsi sebagai wrapper bagi TextField MuiTextField 
 * dan mengubahnya sesuai dengan style TextField pada DPPL bab 3.6
 * 
 * Input: Menerima props seperti pada MuiTextField
 * Output: Mengembalikan TextField yang telah memiliki style yang sesuai
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState(true
  );

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
      />
    </FormGroup>
  );
}