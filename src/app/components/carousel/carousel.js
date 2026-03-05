"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import './carousel.css';

const carousel = function (props) {
  const items = props.carouselItems;

  useEffect(() => {
    // Wait for Bootstrap to be available and carousel element to be ready
    const initCarousel = async () => {
      const { Carousel } = await import('bootstrap');
      const carouselElement = document.getElementById('carousel');
      if (carouselElement) {
        // Initialize the carousel
        const bootstrapCarousel = new Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel',
          pause: false
        });
        
        // Handle slide changes to manage video playback
        carouselElement.addEventListener('slide.bs.carousel', (e) => {
          // Pause video on current slide
          const currentSlide = carouselElement.querySelector('.carousel-item.active video');
          if (currentSlide) {
            currentSlide.pause();
          }
        });
        
        carouselElement.addEventListener('slid.bs.carousel', (e) => {
          // Play video on new slide
          const newSlide = carouselElement.querySelector('.carousel-item.active video');
          if (newSlide) {
            newSlide.play();
          }
        });
      }
    };
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(initCarousel, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-touch="true"
      data-bs-wrap="true">
      <div className="carousel-inner">
        {items.map((item, index) => {
          return (
            <div className={`carousel-item position-relative ${index === 0 ? 'active' : ''} `} key={index}>
              <video autoPlay muted loop playsInline className="w-100 h-100 object-fit-cover" >
                <source src={item.src} type="video/mp4" />
                {item.title ? item.title : ''}
              </video>
            </div>
          )
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