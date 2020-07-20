import React from 'react'
import ReviewNavBar from '../components/review/ReviewNavBar'
import CommentArea from '../components/review/CommentArea'
import Box from '@material-ui/core/Box';
import PhotoHeader from '../components/review/PhotoHeader';

class Review extends React.Component {
    render() {
        return (
            <div>
                <ReviewNavBar />
                <PhotoHeader />
                <Box display="flex" flexDirection="row" width="100%">
                    <Box p={1} width="50%">
                        <img width="100%" src="https://images.unsplash.com/photo-1594722553761-58b3be7b088d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                    </Box>
                    <Box p={1} width="50%">
                        <CommentArea />
                    </Box>
                </Box>

            </div >
        )
    }
}

export default Review