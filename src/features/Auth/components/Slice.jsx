import { Box, Divider, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
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
const Slice = (props) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.flexbox}>
      <Divider className={classes.shareWidth} />
      <Box className={classes.span} component="span">
        OR
      </Box>
      <Divider className={classes.shareWidth} />
    </Box>
  );
};

Slice.propTypes = {};

export default Slice;
