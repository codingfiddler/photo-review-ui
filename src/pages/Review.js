import React from 'react'
import ReviewNavBar from '../components/review/ReviewNavBar'
import Comments from '../components/review/Comments'
import Box from '@material-ui/core/Box';

class Review extends React.Component {
    render() {
        return (
            <div>
                <ReviewNavBar/>
                <div>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box p={2} width="50%">
                        <img src ="https://www.designyourway.net/blog/wp-content/uploads/2019/05/iPad-Pro-wallpaper-4-700x700.jpg" width="100%"/>
                    </Box>
                    <Box p={2} width="50%">
                        <Comments/>
                    </Box>
                </Box>
                </div>
            </div>
        )
    }
}

export default Review