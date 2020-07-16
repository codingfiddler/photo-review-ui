import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class Comments extends React.Component {
    render() {
        return (
            <div>
                <CommentForm />
                <p>Reviews:</p>
                <hr />
                <CommentList />
            </div>
        )
    }
}

export default Comments
