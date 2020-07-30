import React from 'react'
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import SpecsButton from './SpecsButton';
import axios from "axios"

class PhotoHeader extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            username: "",
            dateTaken: "",
            location: ""
        }
    }

    componentDidMount() {
        axios.get("https://api.krino.fiddlingphotographer.com/users/upload/")
            .then(response => {
                console.log(response)
                this.setState({
                    title: response.data.title,
                    username: response.data.username,
                    dateTaken: response.data.taken_date,
                    location: response.data.location_taken,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        const { title, username, dateTaken, location } = this.state

        return (
            <div className="photoHeader" style={{ padding: "30px", backgroundColor: "white" }}>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <h5>Taken by: @{username} </h5>
                </div>
                <div style={{ display: "flex" }}>

                    <ScheduleIcon style={{ paddingRight: "5px" }} />
                    <p>{dateTaken}</p>
                    <LocationOnIcon style={{ paddingLeft: "5px" }} />
                    <p>{location} </p>
                </div>

                <SpecsButton />
            </div>
        )
    }
}

export default PhotoHeader