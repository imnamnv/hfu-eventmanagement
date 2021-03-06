import { makeStyles } from "@material-ui/core";
import React from "react";
import ButtonOptions from "../../components/ButtonOptions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
  },
}));

const OptionsLogin = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonOptions
        text="Login by Facebook"
        listClassProps={["buttonBlue", "borderRadius"]}
      />
      <ButtonOptions
        text="Login by Google"
        listClassProps={["buttonWhite", "borderRadius"]}
      />
      <ButtonOptions
        text="Login by Phone number"
        listClassProps={["buttonWhite", "borderRadius"]}
      />
    </div>
  );
};

OptionsLogin.propTypes = {};

export default OptionsLogin;
