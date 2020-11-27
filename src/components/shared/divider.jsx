import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: -24,
    marginRight: -24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  text: {
    fontSize: 18,
    paddingLeft: 24,
  },
}));

export default function Divider(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <AppBar position="relative">
          <h3 className={classes.text}>{props.text}</h3>
        </AppBar>
      </Paper>
    </div>
  );
}
