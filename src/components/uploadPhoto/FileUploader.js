import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
 backgroundColor: "#4CAF50";
`;

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
      <Button onClick={handleClick}>
        Upload a File!
      </Button>
      <input type = "file" 
             ref = {hiddenFileInput} 
             onChange = {handleChange} 
             style = {{display : 'none'}} />
    </>
  );
};

export default FileUploader;