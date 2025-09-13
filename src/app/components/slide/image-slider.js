import React, { useRef, useState, useEffect } from "react";
import './slider.css';

const ImageSlider = (props) => {
    const items = props.items;

    const trackRef = useRef(null);
    const wrapperRef = useRef(null);
    const intervalRef = useRef(null);
    const [index, setIndex] = useState(0);
    const maxItemDisplay = props.maxItemDisplay || 5;

    // useEffect(() => {
    //     const sliderWidth = wrapperRef.current.getBoundingClientRect().width;
    //     setItemWidth(sliderWidth / 5);

    // });

    useEffect(() => {
        intervalRef.current = setInterval(goNext, 5000);
        return () => clearInterval(intervalRef.current);
      }, []);

    const goNext = () => {
        setIndex((prev) => prev === items.length - maxItemDisplay ? 0 : (prev + 1) );
    };

    useEffect(() => {
        const wrapperTrack = wrapperRef.current;
        const track = trackRef.current;
        if (wrapperTrack) {
          const itemWidth = wrapperRef.current.getBoundingClientRect().width / maxItemDisplay;
          track.style.transform = `translateX(-${index * itemWidth}px)`;
        }
      }, [index, items]);
     
    return (
        <div className="image-slider-wrapper-outer" ref={wrapperRef}>
            <div ref={trackRef} className="row image-slider">
                {
                    items.map((item, index) => <div className="col-mx-2 item" style={{width: `16%`, marginInline: '2%'}} key={index}>
                        <img src={item?.src} alt={item?.alt} />
                    </div>)
                }
            </div>
        </div>

    );
}

export default ImageSlider;