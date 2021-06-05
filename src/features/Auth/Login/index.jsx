import { Box, Container, Divider, makeStyles } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../AuthSlice";
import LoginForm from "./components/LoginForm";
import OptionsLogin from "./components/OptionsLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
  },
  flexbox: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  shareWidth: {
    flexGrow: 1,
  },
  span: {
    margin: theme.spacing(0, 2),
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loginStatus, setLoginStatus] = useState("");

  const handleOnSubmit = async (values) => {
    try {
      console.log(values);

      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      setLoginStatus(user.message);

      console.log(user);
    } catch (error) {
      // error
      console.log(error);
      setLoginStatus(error.message);
    }
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <OptionsLogin />
      <Box component="div" className={classes.flexbox}>
        <Divider className={classes.shareWidth} />
        <Box className={classes.span} component="span">
          OR
        </Box>
        <Divider className={classes.shareWidth} />
      </Box>
      <LoginForm loginStatus={loginStatus} onSubmit={handleOnSubmit} />
    </Container>
  );
};

Login.propTypes = {};

export default Login;
