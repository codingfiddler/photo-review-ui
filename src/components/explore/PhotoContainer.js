import React, { Component } from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {
  const displayPhotos = () => {
    return props.photos.map((photo) => {
      return <Photo url={photo.url} />;
    });
  };

  return <div>{displayPhotos()}</div>;
};

export default PhotoContainer;
