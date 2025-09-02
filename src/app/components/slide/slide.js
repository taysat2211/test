import React, { useState, useRef, useEffect } from 'react'
import './slide.css';
import Card from '../card/card';

function Slide(props) {

  const items = props.items;
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const maxItemDisplay = props.maxItemDisplay || 4;

  const goNext = () => {
    setIndex((prev) => prev === items.length - maxItemDisplay ? 0 : (prev + 1) );
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

   useEffect(() => {
    intervalRef.current = setInterval(goNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const itemWidth = window.innerWidth / maxItemDisplay;
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    }
  }, [index, items]);

  return (
    <div className="row slider">
      <div className="slider-track" ref={trackRef}>
        {
        items.map((item, index) =>
          <div className='object-fit-cover slide-item' style={{width: `${100/maxItemDisplay}%`}} key={index}><Card design={item} /></div>
        )
        }
      </div>
      <a className="prev" onClick={() => goPrev()}>&#10094;</a>
      <a className="next" onClick={() => goNext()}>&#10095;</a>
    </div>
  )
}

export default Slide;