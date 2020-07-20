import React from "react";
import EXIF from "exif-js";

class ImageMeta extends React.Component {
    constructor() {
        super()
        this.state = { data: {} }
    }
    handleChange = async ({
        target: {
            files: [file]
        }
    }) => {
        if (file && file.name) {
            const exifData = await new Promise(resolve => {
                EXIF.getData(file, function () {
                    resolve(EXIF.getAllTags(this))
                })
            })
            this.setState({ data: exifData })
        }
    }

    render() {
        const { data } = this.state
        return (
            <>
                <input
                    type="file"
                    id="file"
                    accept=".jpg, .png, .heif, .heic"
                    onChange={this.handleChange}
                />
                <br />
                {(data && JSON.stringify(data)) || 'nodata'}
            </>
        );
    }

}

export default ImageMeta;
