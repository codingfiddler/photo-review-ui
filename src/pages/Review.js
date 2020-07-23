import ReviewNavBar from '../components/review/ReviewNavBar'
import CommentArea from '../components/review/CommentArea'
import Box from '@material-ui/core/Box';
import PhotoHeader from '../components/review/PhotoHeader';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Review(props) {

    // let { photoId } = useParams()
    // console.log(photoId)

    // const riverPhoto = "https://images.unsplash.com/photo-1594722553761-58b3be7b088d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"

    // const [photo, setPhoto] = useState(riverPhoto);



    // useEffect(() => {
    //     axios.get(myurl) //api
    //         .then(response => {
    //             const data = response.data
    //             setPhoto(data)
    //         })
    // }, [])

    return (
        <div>
            <ReviewNavBar />
            <PhotoHeader />
            <Box display="flex" flexDirection="row" width="100%">
                <Box p={1} width="50%">
                    <img width="100%" src="https://images.unsplash.com/photo-1594722553761-58b3be7b088d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
                    {/* //replace with {photo.url} */}
                </Box>
                <Box p={1} width="50%">
                    <CommentArea />
                </Box>
            </Box>

        </div >
    )
}

export default Review