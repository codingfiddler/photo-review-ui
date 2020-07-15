import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Container from '@material-ui/core/Container';

class Comments extends React.Component {
    render() {
        return (
            <div>
                <CommentForm/>
                <p>Reviews:</p>
                <hr/>
                <CommentList/>
            </div>
        )
    }
}

export default Comments
