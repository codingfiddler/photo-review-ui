import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExifData from "./ExifData"

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function SpecsButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <div>
            <Button variant="contained" onClick={handleClick} style={{ width: "15%" }}>
                Camera Details
            </Button>

            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                    <p>Camera Model:</p>
                    <p>Camera Lens:</p>
                    <p>Aperture:</p>
                    <p>Shutter Speed:</p>
                    <p>ISO:</p>
                </Typography>
            </Popover>
        </div>
    );
}