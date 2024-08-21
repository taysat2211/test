import React from "react";
import "./zoom-image.css";

function ZoomImage(props) {
  const { src, alt, link } = props;
  return (
    <div className="zoom-image">
      <a href={link ? link : "#"}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}

export default ZoomImage;
