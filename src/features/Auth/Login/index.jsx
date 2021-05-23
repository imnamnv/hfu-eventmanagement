import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./components/LoginForm";
import OptionsLogin from "./components/OptionsLogin";
import { Box, Container, Divider, makeStyles } from "@material-ui/core";

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

  const handleOnSubmit = (values) => {
    console.log(values);
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
      <LoginForm onSubmit={handleOnSubmit} />
    </Container>
  );
};

Login.propTypes = {};

export default Login;
