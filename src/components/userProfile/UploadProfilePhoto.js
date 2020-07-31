import React from "react";
import ReactDOM from "react-dom";

//import "./styles.css";

export default function Upload() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none",
        }}
      />
      <div
        style={{
          height: "160px",
          width: "160px",
          marginTop: "30px",
          border: "1px dashed black",
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          alt=""
          style={{
            width: "160px",
            height: "160px",
            position: "absolute",
          }}
        />
      </div>
      <p style={{ fontSize: "10px" }}>Click to Upload Profile Picture</p>
    </div>
  );
}
