import React from "react";
import PropTypes from "prop-types";
import ButtonOptions from "../../components/ButtonOptions";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
  },
}));

const OptionsRegister = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonOptions
        text="Register by Facebook"
        listClassProps={["buttonBlue", "borderRadius"]}
      />
      <ButtonOptions
        text="Register by Google"
        listClassProps={["buttonWhite", "borderRadius"]}
      />
    </div>
  );
};

OptionsRegister.propTypes = {};

export default OptionsRegister;
