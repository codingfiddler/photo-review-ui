import React from "react";

export default function displayPhotos() {
  return (
    <div
      id="gallery"
      style={{
        display: "grid",
        gridColumn: "2px",
        gridTemplateColumns: "auto auto auto",
        padding: "10px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        class="grid-item"
        style={{
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(0,0,0,0.8)",
          padding: "50px",
          height: "450px",
          width: "300px",
          fontSize: "30px",
          textAlign: "center ",
        }}
      >
        1
      </div>
      <div
        class="grid-item"
        style={{
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(0,0,0,0.8)",
          padding: "50px",
          height: "450px",
          width: "300px",
          fontSize: "30px",
          textAlign: "center ",
        }}
      >
        2
      </div>
      <div
        class="grid-item"
        style={{
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(0,0,0,0.8)",
          padding: "50px",
          height: "450px",
          width: "300px",
          fontSize: "30px",
          textAlign: "center ",
        }}
      >
        3
      </div>
    </div>
  );
}
