import React, { Component } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';
import './Comment.css';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import { Comment, Form, Header } from 'semantic-ui-react'


class CommentArea extends Component {
    state = {
        username: '',
        newComment: '',
        comments: [],
    };

    updateInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    postComment = event => {
        event.preventDefault();
        const { username, newComment } = this.state;
        if (username.trim() === '' || newComment.trim() === '') return;

        const data = {
            name: username,
            text: newComment,
            votes: 0,
        };
        console.log("posting comment")
        axios
            .post('http://localhost:5000/comment', data)
            .then(() => {
                this.setState({
                    username: '',
                    newComment: '',
                });
                console.log("comment posted")
            })
            .catch(error => console.log(error));
    };

    // axios
    // .post(`http://localhost:5000/photos/${photoID}/comment`, data)
    // .then(response => {
    //     const { username, newComment } = response.data;
    //     this.setState({
    //         username: '',
    //         newComment: '',
    //     });
    // })
    // .catch(error => console.log(error));

    vote = (id, num) => {
        axios.post('http://localhost:5000/vote', {
            id,
            vote: num,
        });
    };

    componentDidMount() {
        const pusher = new Pusher('28cd4e82afd300da03f5', {
            cluster: 'us2',
            encrypted: true,
        });

        axios
            .get('http://localhost:5000')
            .then(({ data }) => {
                this.setState({
                    comments: [...data],
                });
            })
            .catch(error => console.log(error));

        const channel = pusher.subscribe('comments');
        channel.bind('new-comment', data => {
            this.setState(prevState => {
                const { comments } = prevState;
                comments.push(data.comment);

                return {
                    comments,
                };
            });
        });

        channel.bind('new-vote', data => {
            let { comments } = this.state;
            comments = comments.map(e => {
                if (e._id === data.doc._id) {
                    return data.doc;
                }

                return e;
            });

            this.setState({
                comments,
            });
        });
    }

    render() {
        const { username, newComment, comments } = this.state;

        const userComments = comments.map(e => (

            <div class="ui comments">
                <div class="comment">
                    <a class="avatar"><img src="https://img.icons8.com/cotton/2x/person-male--v2.png" /></a>
                    <div class="content">
                        <a class="author">{e.name}</a>
                        <div class="metadata">07/23/2020</div>
                        <div class="text">{e.text}</div>
                        <div className="actions" style={{ display: "flex" }}>
                            <div className="vote-buttons">
                                <a>
                                    <IconButton className="downvote" onClick={() => this.vote(e._id, -1)}>
                                        <ThumbDownIcon fontSize="small" style={{ color: "red" }} />
                                    </IconButton>
                                </a>
                                <a>
                                    <IconButton className="upvote" onClick={() => this.vote(e._id, 1)}>
                                        <ThumbUpAltIcon fontSize="small" style={{ color: "green" }} />
                                    </IconButton>
                                </a>
                                <a>Votes: {e.votes}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        ));

        return (
            <div className="App">
                <h2>Leave a Review</h2>
                <hr />
                <section className="comments-form">
                    <form onSubmit={this.postComment}>
                        <label htmlFor="username">Your Name:</label>
                        <input
                            placeholder="Please enter your name"
                            className="username"
                            name="username"
                            id="username"
                            type="name"
                            value={username}
                            onChange={this.updateInput}
                        />

                        <label htmlFor="new-comment">Review:</label>
                        <textarea
                            placeholder="Please leave positive and constructive reviews"
                            className="comment"
                            name="newComment"
                            id="new-comment"
                            value={newComment}
                            onChange={this.updateInput}
                        />
                        <Button type="submit" style={{ backgroundColor: "#32e0c4", color: "white" }}>Submit</Button>
                    </form>
                </section>
                <h2>Reviews</h2>
                <hr />
                <section className="comments-section">{userComments}</section>
            </div >
        );
    }
}

export default CommentArea;