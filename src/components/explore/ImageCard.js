import React, { Component } from "react";
import CardInfo from "./CardInfo";

function ImageCard(props) {
  return (
    <div className="d-inline-block g-card">
      {/* <img className="g-card-image" src={props.item.url} /> */}
      {/* <CardInfo title={this.props.title} author="autho" /> */}
      {/* {props.item.selected && (
        <CardInfo title={this.props.title} author="author" />
      )} */}
    </div>
  );
}

export default ImageCard;
