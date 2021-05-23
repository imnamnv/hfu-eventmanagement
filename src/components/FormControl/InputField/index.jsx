import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

const InputField = (props) => {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const errorTitle = formState.errors[name]?.message;

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          name={name}
          fullWidth
          label={label}
          disabled={disabled}
          error={!!errorTitle}
          helperText={errorTitle}
          placeholder={label}
          margin="normal"
          variant="outlined"
        />
      )}
    ></Controller>
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
