import { yupResolver } from "@hookform/resolvers/yup";
import { Button, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/FormControl/InputField";
import PasswordField from "../../../../components/FormControl/PasswordField";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#FFF",
  },

  button: {
    background: "orange",
    borderRadius: "20px",
    width: "100%",
  },
}));

const RegisterForm = ({ onSubmit, registerStatus }) => {
  const classes = useStyles();

  const schema = yup.object().shape({
    username: yup.string().required("enter usename"),
    password: yup.string().required("enter password"),
    retypePassword: yup
      .string()
      .required("Hãy nhập lại mật khẩu")
      .oneOf([yup.ref("password")], "Nhập lại đúng mật khẩu"),
    nickname: yup.string().required("enter nickname"),
    RadioGroup: yup.string(),
  });
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      retypePassword: "",
      nickname: "",
      RadioGroup: "female",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log(values);
    onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="username" label="Name" form={form}></InputField>
      <PasswordField name="password" label="Password" form={form} />
      <PasswordField
        name="retypePassword"
        label="Retype Password"
        form={form}
      />
      <InputField name="nickname" label="Nickname" form={form}></InputField>

      {/* <Controller
        name="RadioGroup"
        control={form.control}
        render={({ field }) => (
          <RadioGroup aria-label="gender" {...field} name="RadioGroup">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              name="RadioGroup"
              label="Male"
            />
          </RadioGroup>
        )}
      ></Controller> */}

      <span>{registerStatus}</span>
      <Button
        type="submit"
        size="large"
        variant="contained"
        fullWidth
        className={classes.button}
      >
        <Typography variant="body2" text>
          Register
        </Typography>
      </Button>
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  registerStatus: PropTypes.string,
};

export default RegisterForm;
