import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

import { signOutUser } from "../Actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
      
          <Typography variant="h6" className={classes.title}>
            MARKETEERS-TASK
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              Cookies.remove("loggedUser");
              dispatch(signOutUser());
            }}
          >
            SignOut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
