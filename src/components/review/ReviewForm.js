import React, { Component } from 'react'
import "./Comment.css"
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import axios from "axios"
import CurrentDate from "./CurrentDate"

export class ReviewForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comment: "",
            date: <CurrentDate />,
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
            .post("", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { username, comment } = this.state

        return (
            <>
                <Box display="flex" flexDirection="row" width="100%">

                    <Box p={1} width="50%">
                        <h2>Leave a Review</h2>
                        <hr />
                        <section className="comments-form">
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="username">Your Username:</label>
                                <input
                                    placeholder="Please enter your name"
                                    className="username"
                                    name="username"
                                    value={username}
                                    onChange={this.handleChange}
                                />

                                <label htmlFor="new-comment">Review:</label>
                                <textarea
                                    placeholder="Please leave positive and constructive reviews"
                                    className="comment"
                                    name="comment"
                                    value={comment}
                                    onChange={this.handleChange}
                                />
                                <Button type="submit" style={{ backgroundColor: "#32e0c4", color: "white" }}>Submit</Button>
                            </form>
                        </section>
                    </Box>

                </Box>
            </>
        )
    }
}

export default ReviewForm