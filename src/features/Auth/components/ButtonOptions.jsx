import React from "react";
import PropTypes from "prop-types";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  borderRadius: {
    borderRadius: "20px",
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
  },
  buttonWhite: { background: "#FFF", border: "2px solid #000" },
  buttonBlue: {
    background: "#3B5998",
    border: "2px solid #3B5998",
    color: "white",
  },
}));

const ButtonOptions = ({ text, listClassProps }) => {
  const classes = useStyles();
  const listClass = listClassProps.map((element) => classes[element]);
  return (
    <Button
      size="large"
      variant="contained"
      href="#outlined-buttons"
      className={listClass}
    >
      {text}
    </Button>
  );
};

ButtonOptions.propTypes = {
  text: PropTypes.string.isRequired,
  listClassProps: PropTypes.array,
};

export default ButtonOptions;
