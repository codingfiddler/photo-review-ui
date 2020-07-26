import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from 'react-router-dom/Link'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HomeNavBar from "./HomeNavBar"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '90vh',
    },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <>
            <HomeNavBar />
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar} style={{ backgroundColor: "#32e0c4" }}>
                            <AccountCircleRoundedIcon style={{ backgroundColor: "#32e0c4", color: 'white' }} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                                required
                                autoFocus
                            />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Username"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Email"
                                type="email"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                                required
                            />
                            <TextField
                                label="Location"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                            />
                            <TextField
                                label="Bio"
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                                multiline
                                rows={4}

                            />
                            <Link to="/home">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    style={{ backgroundColor: "#32e0c4", color: "white" }}
                                >
                                    Sign Up
                                </Button>
                            </Link>
                            <Grid container>

                                <Grid item>
                                    <Link to="/" variant="body2" style={{ color: 'black' }}>
                                        <p>Already have an account? Sign In</p>
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}