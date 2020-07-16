import React from 'react'
import ReviewNavBar from '../components/review/ReviewNavBar'
import Comments from '../components/review/Comments'
import Box from '@material-ui/core/Box';

class Review extends React.Component {
    render() {
        return (
            <div>
                <ReviewNavBar />
                <div>
                    <Box display="flex" flexDirection="row" width="100%">
                        <Box p={2} width="50%">
                            <img width="100%" src="https://images.unsplash.com/photo-1594722553761-58b3be7b088d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                        </Box>
                        <Box p={2} width="50%">
                            <Comments />
                        </Box>
                    </Box>
                </div>
            </div>
        )
    }
}

export default Review