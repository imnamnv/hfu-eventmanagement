import { Container, makeStyles } from "@material-ui/core";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../AuthSlice";
import Slice from "../components/Slice";
import LoginForm from "./components/LoginForm";
import OptionsLogin from "./components/OptionsLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loginStatus, setLoginStatus] = useState("");

  const handleOnSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      setLoginStatus(user.message);

      console.log(user);
    } catch (error) {
      // error
      setLoginStatus(error.message);
    }
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <OptionsLogin />
      <Slice />
      <LoginForm loginStatus={loginStatus} onSubmit={handleOnSubmit} />
    </Container>
  );
};

Login.propTypes = {};

export default Login;
