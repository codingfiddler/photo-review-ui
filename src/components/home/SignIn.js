import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from 'react-router-dom/Link'
import withRouter from 'react-router-dom/withRouter';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import axios from "axios"
import Alert from '@material-ui/lab/Alert';

class SignIn extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            error: false,
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post("https://api.krino.fiddlingphotographer.com/users/login/", this.state)
            .then(response => {
                console.log(response.data)
                this.props.history.push('/explore');
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            })



    }

    render() {
        return (
            <Grid container component="main" style={{ height: '90vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7}
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)',
                        backgroundPosition: 'center'
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div
                        style={{
                            margin: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar style={{ backgroundColor: "#32e0c4" }}>
                            <LockOutlinedIcon style={{ backgroundColor: "#32e0c4", color: 'white' }} />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form style={{ width: '100%' }} onSubmit={this.handleSubmit}>
                            <TextField
                                color="default"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ backgroundColor: "#32e0c4", color: "white", marginTop: "20px", marginBottom: "10px" }}
                            >
                                Sign In
                            </Button>

                            <Grid container>

                                <Grid item>
                                    <Link to="/signUp" variant="body2" style={{ color: 'black' }}>
                                        <p>Don't have an account? Sign Up</p>
                                    </Link>
                                </Grid>
                            </Grid>

                            {this.state.error && <Alert severity="error" > Your email or password is incorrect</Alert >}
                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(SignIn)