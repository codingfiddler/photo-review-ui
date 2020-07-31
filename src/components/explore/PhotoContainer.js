import React from "react";
import Imgix from "react-imgix";
import PropTypes from "prop-types";
import Masonry from "react-masonry-component";
import Link from "react-router-dom/Link"

const PhotoContainer = (props) => {
  const displayPhotos = () => (
    <div className="gallery">
      {props.photos.map((photo) => (
        <div className="container">
          <Link to={`/review/${photo.photo_id}`}>
            <Imgix className="image" src={photo.photo} />
          </Link>
          <div className="overlay">
            <h1 className="title font-weight-bolder">{photo.title}</h1>
            {/* <h2 className="eye">{photo.username}</h2> */}
          </div>
        </div>
      ))}
    </div>
  );

  return <div>{displayPhotos()}</div>;
};

export default PhotoContainer;
