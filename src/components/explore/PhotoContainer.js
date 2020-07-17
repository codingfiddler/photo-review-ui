import React from "react";
import Photo from "./Photo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactHover from "react-hover";
import Gallery from "react-photo-gallery";
import Imgix from "react-imgix";

const PhotoContainer = (props) => {
  const displayPhotos = () => (
    <div className="gallery">
      {props.photos.map((photo) => (
        <>
          <div className="g-card-info">
            <h1 className="g-card-title font-weight-bolder">{photo.title}</h1>
            <h2 className="g-card-eye">the author's name</h2>
          </div>
          <span className="g-card-image image m-1">
            <Imgix height="100%" width="100%" src={photo.url} />
            {/* sizes="calc(10% - 10px)" height="95%" width="95%" */}
          </span>
        </>
      ))}
    </div>
  );

  return <div>{displayPhotos()}</div>;
};

export default PhotoContainer;

// return props.photos.map((photo) => {
//   return (
//     <Col className="justify-content-around">
//       {/* <Row className="justify-content-around"></Row> */}
//       <div className="g-card-image">
//         <span className="image">
//           <Photo url={photo.url} />
//         </span>
//         <div className="g-card-info">
//           <h1 className="g-card-title font-weight-bolder">{photo.title}</h1>
//           <h2 className="g-card-eye">the author's name</h2>
//         </div>
//       </div>
//     </Col>
//   );
// });

// return <Gallery photos={photos} />;

// return (
//   <Col className="justify-content-around">
//   {/* <Row className="justify-content-around"></Row> */}
//   <div className="g-card-image">
//     <span className="image">
//       <Photo url={photo.url} />
//     </span>
//     <div className="g-card-info">
//       <h1 className="g-card-title font-weight-bolder">{photo.title}</h1>
//       <h2 className="g-card-eye">the author's name</h2>
//     </div>
//   </div>
// </Col>
// );

// <>
//           <span className="justify-content-around">
//             <Imgix src={photo.url} />
//           </span>
//           <div className="g-card-info">
//             <h1 className="g-card-title font-weight-bolder">{photo.title}</h1>
//             <h2 className="g-card-eye">the author's name</h2>
//           </div>
//         </>
