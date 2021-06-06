import { Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import userAPI from "../../../api/userAPI";
import Slice from "../components/Slice";
import OptionsRegister from "./components/OptionsRegister";
import RegisterForm from "./components/RegisterForm";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
  },
}));

const Register = (props) => {
  const [registerStatus, setRegisterStatus] = useState("");

  const handleOnSubmit = async (values) => {
    try {
      const payload = values;
      const register = await userAPI.register(payload);
      setRegisterStatus(register.message);
    } catch (error) {
      // error
      setRegisterStatus(error.message);
    }
  };
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <OptionsRegister />
      <Slice />
      <RegisterForm registerStatus={registerStatus} onSubmit={handleOnSubmit} />
    </Container>
  );
};

Register.propTypes = {};

export default Register;
