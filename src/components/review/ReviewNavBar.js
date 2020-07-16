import React from 'react';

//Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import logo from "../../assets/logo.png"

//Styling of the components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'left',
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function ReviewNavBar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#092532" }}>
          <Typography align="center" className={classes.title} variant="h6" noWrap>
            <IconButton href="/">
              <img
                src={logo}
                alt="logo"
                height="30px"
              />
            </IconButton>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
