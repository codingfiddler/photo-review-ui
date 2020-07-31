import React from 'react'
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SpecsButton from './SpecsButton';
import axios from "axios"

class PhotoHeader extends React.Component {


    render() {

        const { title, username, taken_date, location_taken } = this.props.photo

        return (
            <div className="photoHeader" style={{ padding: "30px", backgroundColor: "white" }}>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <h5>Taken by: @smilte.val </h5>
                </div>
                <div style={{ display: "flex" }}>

                    <ScheduleIcon style={{ paddingRight: "5px" }} />
                    <p>{taken_date}</p>
                    <LocationOnIcon style={{ paddingLeft: "5px" }} />
                    <p>{location_taken} </p>
                </div>

                <SpecsButton />
            </div>
        )
    }
}

export default PhotoHeader