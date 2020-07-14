import React from 'react';

//Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';


//Styling of the components
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
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
        <Toolbar style={{backgroundColor: "#092532"}}>
            <Typography align= "center" className={classes.title} variant="h6" noWrap>
                LEAVE A REVIEW
            </Typography>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
