import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Box from '@material-ui/core/Box'
import axios from "axios"

class ReviewList extends Component {
    render() {
        return (
            <>
                {/* <Box p={1} width="50%">
                    <h2>Reviews</h2>
                    <hr />
                    <section className="comments-section">{userComments}</section>
                </Box> */}
                <div class="ui comments">
                    <div class="comment">
                        <a class="avatar"><img src="https://img.icons8.com/cotton/2x/person-male--v2.png" /></a>
                        <div class="content">
                            <a class="author"> NAME </a>
                            <div class="metadata"> DATE </div>
                            <div class="text"> REVIEW </div>
                            <div className="actions" style={{ display: "flex" }}>
                                <div className="vote-buttons">
                                    {/* <a>
                                        <IconButton className="downvote" onClick={() => this.vote(e._id, -1)}>
                                            <ThumbDownIcon fontSize="small" style={{ color: "red" }} />
                                        </IconButton>
                                    </a>
                                    <a>
                                        <IconButton className="upvote" onClick={() => this.vote(e._id, 1)}>
                                            <ThumbUpAltIcon fontSize="small" style={{ color: "green" }} />
                                        </IconButton>
                                    </a>
                                    <a> VOTES </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </>
        )
    }
}

export default ReviewList
