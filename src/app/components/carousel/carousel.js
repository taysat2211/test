import React from "react";
import Image from "next/image";
import './carousel.css';

function carousel(props) {
  const items = props.carouselItems;

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div className="carousel-inner">
        {items.map((item, index) => {
          if(index == 0) {
            return (
              <div className="carousel-item active" key={index}>
                <video autoPlay muted loop playsInline className="w-100 h-100 object-fit-cover">
                  <source src={item.src} type="video/mp4"/>
                  item.title ? item.title : ''
                </video>
              </div>
            )
          } else {
            return (
              <div className="carousel-item" key={index}>
                <video autoPlay muted loop playsInline className="w-100 h-100 object-fit-cover">
                  <source src={item.src} type="video/mp4"/>
                  item.title ? item.title : ''
                </video>
              </div>
            );

          }
          })}
      </div>
      <button
        className="carousel-control-prev carousel-button"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel-button"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default carousel;