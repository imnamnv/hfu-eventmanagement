import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
  },
  borderRadius: {
    borderRadius: "20px",
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
  },
  buttonWhite: { background: "#FFF", border: "2px solid #000" },
  buttonBlue: { background: "#3B5998", border: "2px solid #3B5998" },
}));

const OptionsLogin = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        size="large"
        variant="contained"
        color="primary"
        href="#outlined-buttons"
        className={[classes.buttonBlue, classes.borderRadius]}
      >
        Login by Facebook
      </Button>
      <Button
        size="large"
        className={[classes.buttonWhite, classes.borderRadius]}
        variant="contained"
        href="#outlined-buttons"
      >
        Login by Google
      </Button>
      <Button
        size="large"
        className={[classes.buttonWhite, classes.borderRadius]}
        variant="contained"
        href="#outlined-buttons"
      >
        Login by Phone number
      </Button>
    </div>
  );
};

OptionsLogin.propTypes = {};

export default OptionsLogin;
