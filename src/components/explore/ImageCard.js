import React, { Component } from "react";
import CardInfo from "./CardInfo";

function ImageCard(props) {
  return (
    <div
      className="d-inline-block g-card"
      onClick={(e) => props.onClick(props.item)}
    >
      <img
        className="g-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          author={props.item.author}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default ImageCard;
