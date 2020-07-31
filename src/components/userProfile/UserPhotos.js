import React from "react";

export default function displayPhotos() {
  return (
    <div
      id="gallery"
      style={{
        display: "grid",
        gridColumn: "2px",
        gridTemplateColumns: "auto auto auto auto",
        padding: "10px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div class="grid-item">
        <img src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          style={{
            padding: "10px",
            height: "480px",
            width: "350px",
          }} />
      </div>
      <div class="grid-item">
        <img src="https://images.pexels.com/photos/1029844/pexels-photo-1029844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={{
            padding: "10px",
            height: "480px",
            width: "350px",
          }} />
      </div>
      <div class="grid-item">
        <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={{
            padding: "10px",
            height: "480px",
            width: "350px",
          }} />
      </div>
      <div class="grid-item">
        <img src="https://images.pexels.com/photos/3690511/pexels-photo-3690511.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={{
            padding: "10px",
            height: "480px",
            width: "350px",
          }} />
      </div>
    </div>
  );
}
