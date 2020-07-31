import React from 'react'
import PhotoForm from "../components/uploadPhoto/PhotoForm"
import Container from '@material-ui/core/Container'
import UploadNavBar from '../components/uploadPhoto/UploadNavBar'

class UploadPhoto extends React.Component {
    render() {
        return (
            <div>
                <UploadNavBar />
                <Container maxWidth="md">
                    <div>
                        <PhotoForm />
                    </div>
                </Container>
            </div>
        )
    }
}

export default UploadPhoto