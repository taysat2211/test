import React, { useRef, useState, useEffect } from "react";
import './slider.css';

const ImageSlider = (props) => {
    const items = props.items;

    const trackRef = useRef(null);
    const wrapperRef = useRef(null);
    const intervalRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(0);
    const marginItem = 30;
    const maxItemDisplay = props.maxItemDisplay || 5;

    // useEffect(() => {
    //     const sliderWidth = wrapperRef.current.getBoundingClientRect().width;
    //     setItemWidth(sliderWidth / 5);

    // });

    // useEffect(() => {
    //     intervalRef.current = setInterval(goNext, 5000);
    //     return () => clearInterval(intervalRef.current);
    //   }, []);

    // const goNext = () => {
    //     setIndex((prev) => prev === items.length - maxItemDisplay ? 0 : (prev + 1) );
    // };
    
    return (
        <div className="image-slider-wrapper-outer px-10" ref={wrapperRef}>
            <div ref={trackRef} className="row image-slider">
                {
                    items.map((item, index) => <div className="item" style={{width: `18%`, marginInline: '1%'}} key={index}>
                        <img src={item?.src} alt={item?.alt} />
                    </div>)
                }
            </div>
        </div>

    );
}

export default ImageSlider;