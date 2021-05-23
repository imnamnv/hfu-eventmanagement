import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const PasswordField = (props) => {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const errorTitle = formState.errors[name]?.message;
  console.log("ERROR: ", errorTitle);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl
      error={!!errorTitle}
      variant="outlined"
      fullWidth
      margin="normal"
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <OutlinedInput
            {...field}
            name={name}
            fullWidth
            label={label}
            disabled={disabled}
            error={!!errorTitle}
            variant="outlined"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      />
      <FormHelperText error={!!errorTitle}>{errorTitle}</FormHelperText>
    </FormControl>
  );
};

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PasswordField;
