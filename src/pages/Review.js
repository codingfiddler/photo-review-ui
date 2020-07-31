import ReviewNavBar from '../components/review/ReviewNavBar'
import CommentArea from '../components/review/CommentArea'
import Box from '@material-ui/core/Box';
import PhotoHeader from '../components/review/PhotoHeader';
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoContainer from "../components/explore/PhotoContainer"
import ReviewForm from "../components/review/ReviewForm"
import Container from '@material-ui/core/Container'
import ReviewList from "../components/review/ReviewList"

function Review(props) {

    let { photo_id } = useParams()
    console.log(photo_id)

    const riverPhoto = "https://images.unsplash.com/photo-1594722553761-58b3be7b088d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"

    const [photo, setPhoto] = useState(riverPhoto);



    useEffect(() => {
        axios.get(`https://api.krino.fiddlingphotographer.com/users/upload/${photo_id}/`)
            .then(response => {
                console.log(response)
                const data = response.data
                setPhoto(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <ReviewNavBar />
            <div style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')", backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Container maxWidth="md" style={{ padding: "30px" }}>

                    <div style={{ width: "100%", boxShadow: "1px 1px 5px" }}>
                        <PhotoHeader photo={photo} />
                        <div style={{ backgroundColor: "white" }}>
                            <img style={{ padding: "0px 30px 30px 30px", alignContent: "center" }} width="100%" src={photo.photo} />
                        </div>
                    </div>

                    <div style={{ padding: "30px", width: "100%", boxShadow: "1px 1px 5px", backgroundColor: "white" }}>
                        <CommentArea photo={photo} />
                        {/* <ReviewList /> */}
                    </div>
                </Container>
            </div>


        </div >
    )
}

export default Review