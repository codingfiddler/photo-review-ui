import React from 'react'
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import SpecsButton from './SpecsButton';

class PhotoHeader extends React.Component {
    render() {
        return (
            <div className="photoHeader" style={{ padding: "30px" }}>
                <div>
                    <h1>Look Through</h1>
                </div>
                <div>
                    <h5>Taken by: @kathyJennings</h5>
                </div>
                <div style={{ display: "flex" }}>
                    <ScheduleIcon style={{ paddingRight: "5px" }} />
                    <p>07/20/2020</p>
                    <LocationOnIcon style={{ paddingLeft: "5px" }} />
                    <p>New York City </p>
                </div>

                <SpecsButton />
            </div>
        )
    }
}

export default PhotoHeader