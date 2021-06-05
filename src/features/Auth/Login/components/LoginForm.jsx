import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import InputField from "../../../../components/FormControl/InputField";
import PasswordField from "../../../../components/FormControl/PasswordField";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#FFF",
  },
  submit: {
    display: "flex",
    "& $button": {
      background: "orange",
      borderRadius: "20px",
      width: "60%",
    },
  },
}));
const LoginForm = (props) => {
  const classes = useStyles();
  const { onSubmit, loginStatus } = props;

  const [rememberLogin, setRememberLogin] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("enter name"),
    password: yup.string().required("enter password"),
  });
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    if (onSubmit) {
      onSubmit(values);
    }
  };
  const preventDefault = (event) => event.preventDefault();

  const handleRememberLoginChange = () => {
    setRememberLogin(!rememberLogin);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="username" label="Name" form={form}></InputField>
      <PasswordField name="password" label="Password" form={form} />
      <span>{loginStatus}</span>
      <Typography>
        <Link href="#" to="/" onClick={preventDefault} className={classes.link}>
          Forgot your password ?
        </Link>
      </Typography>
      <Box component="div" className={classes.submit}>
        <FormControlLabel
          className={classes.checkbox}
          control={
            <Checkbox
              checked={rememberLogin}
              onChange={handleRememberLoginChange}
              name="rememberLogin"
            />
          }
          label="Remember me"
        />
        <div style={{ flexGrow: "1" }}></div>
        <Button
          type="submit"
          size="large"
          variant="contained"
          fullWidth
          className={classes.button}
        >
          <Typography variant="body2" text>
            Login
          </Typography>
        </Button>
      </Box>
    </form>
  );
};

LoginForm.propTypes = { onSubmit: PropTypes.func };

export default LoginForm;
