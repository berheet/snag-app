import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center",
    backgroundColor:'cadetblue',
  },
  margin: {
    margin: theme.spacing.unit,
    


  },
  cssLabel: {
    "&$cssFocused": {
      color: 'black'
    }
  },
  cssFocused: {},
  cssUnderline: {
    "&:after": {
      borderBottomColor: 'black'
    }
  },
  bootstrapRoot: {
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 3,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 12,
    padding: "14px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

function CustomizedInputs(props) {
  const { classes} = props;
  return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-input"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused
          }}
        >
          Search...
        </InputLabel>
        <Input
          id="custom-css-input"
          classes={{
            underline: classes.cssUnderline
          }}
        />
      </FormControl>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
