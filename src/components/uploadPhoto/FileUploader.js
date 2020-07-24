import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

const FileUploader = props => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);

  };

  return (
    <>
      <br /><br />
      <Button
        style={{ backgroundColor: "#32e0c4", width: "100%" }}
        color="primary"
        variant="contained"
        onClick={handleClick}
      >
        Attach an image
      </Button>
      <input type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }} />
    </>
  );
};

export default FileUploader;