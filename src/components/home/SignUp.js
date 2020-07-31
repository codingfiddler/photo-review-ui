import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from 'react-router-dom/Link'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HomeNavBar from "./HomeNavBar"
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import axios from "axios"

class SignUp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            full_name: "",
            username: "",
            email: "",
            password: "",
            location: "",
            bio: "",
            profile_image: "",
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        axios
            .post("https://api.krino.fiddlingphotographer.com/users/signup/", this.state)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        this.props.history.push('/home');
    }

    render() {

        const { full_name, username, email, password, location, bio } = this.state

        return (
            <>
                <HomeNavBar />
                <Grid container component="main" style={{ height: '90vh' }}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7}
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)',
                            backgroundPosition: 'center'
                        }} />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div
                            style={{
                                margin: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Avatar style={{ backgroundColor: "#32e0c4" }}>
                                <AccountCircleRoundedIcon style={{ backgroundColor: "#32e0c4", color: 'white' }} />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <form style={{ width: '100%' }} onSubmit={this.handleSubmit}>
                                <TextField
                                    label="Full Name"
                                    name="full_name"
                                    value={full_name}
                                    placeholder="Ex. Jane Doe"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    fullWidth
                                    onChange={this.handleChange}
                                    required
                                    autoFocus
                                />
                                <TextField
                                    label="Username"
                                    name="username"
                                    value={username}
                                    placeholder="Ex. JanesPhotos"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    onChange={this.handleChange}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Email"
                                    name="email"
                                    value={email}
                                    placeholder="Ex. janedoe@gmail.com"
                                    type="email"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    onChange={this.handleChange}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Password"
                                    name="password"
                                    value={password}
                                    placeholder="Must be at least 8 characters"
                                    type="password"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    onChange={this.handleChange}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Location"
                                    name="location"
                                    value={location}
                                    placeholder="Ex. Brooklyn, New York"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    onChange={this.handleChange}
                                    fullWidth
                                />
                                <TextField
                                    label="Bio"
                                    name="bio"
                                    value={bio}
                                    placeholder="Tell us about yourself :)"
                                    variant="outlined"
                                    margin="normal"
                                    size="small"
                                    onChange={this.handleChange}
                                    fullWidth
                                    multiline
                                    rows={4}

                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{ backgroundColor: "#32e0c4", color: "white", marginTop: "20px", marginBottom: "10px" }}
                                >
                                    Sign Up
                                    </Button>

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
}

export default SignUp