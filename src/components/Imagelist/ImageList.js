import React from "react";
import ImageShow from "../Imageshow/ImageShow";
import "./imageList.css";

export default function ImageList({ Image }) {
  const renderImage = Image.map((image) => {
    return <ImageShow Image={image} />;
  });

  return <div className="imageList">{renderImage}</div>;
}
