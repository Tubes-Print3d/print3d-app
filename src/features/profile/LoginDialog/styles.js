import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(5) },
  title: {
    fontWeight: "bold",
    fontSize: 56,
    fontStyle: "italic",
    textAlign: "center",
  },
  paper: {
    background: theme.palette.background.paper,
    color: "black",
    padding: theme.spacing(5),
  },
  textFieldCustom: {
    "& .MuiInputBase-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiInput-underline": {
      "&:before, &:hover::before": {
        borderBottomColor: theme.palette.primary.main,
      },
      "& .MuiSelect-icon:not(.Mui-disabled)": {
        color: theme.palette.primary.main,
      },
    },
    "& .MuiFormLabel-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      color: theme.palette.primary.main,
      "& fieldset, &:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiFormHelperText-root:not(.Mui-error)": {
      color: theme.palette.primary.main,
    },
  },
  subheader: {
    fontSize: 24,
    fontWeight: 600,
    fontStyle: "italic",
    color: theme.palette.primary.main,
  },
  bottomContainer: {
    padding: theme.spacing(1),
  },
  checkboxCustom: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 9,
    width: "100%",
    margin: 0,
    "& .MuiCheckbox-root": {
      color: theme.palette.primary.main,
    },
  },
  checkboxWrapper: {
    padding: theme.spacing(0, 2),
  },
  alamatWrapper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(-3),
  },
}));

export default useStyles;
