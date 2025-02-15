import React, { useState, useEffect } from 'react'
import './slide.css';
import Card from '../card/card';

function Slide(props) {

  const items = props.items;
  const MAX_DISPLAY_LENGTH = 4;
  const slideLength = items.length > MAX_DISPLAY_LENGTH ? MAX_DISPLAY_LENGTH : items.length;
  const STEP = 1;
  
  let [displays, setDisplays] = useState(items.slice(0,slideLength));
  let [pos, setPos] = useState(slideLength);

  useEffect(() => {
    if(items.length > 4){
      setInterval(() => {
        nextSlide(STEP);
      }, 10000);
    }
  },[pos]);
  const nextSlide = (next) => {
    let nextPos = -1;
    let nextDisplay = [];
    if(next && next > 0){
      nextPos = (pos + next) <= items.length ? (pos + next) : slideLength;
    } else {
      nextPos = (pos + next) < MAX_DISPLAY_LENGTH ? items.length : (pos + next);
    }
    nextDisplay = items.slice(nextPos - 4, nextPos);
    setPos(nextPos);
    setDisplays(nextDisplay);
  } 
  return (
    <div>
      {
        displays.length === 4 ? (
        <div className="row slider">
          <div className='slide-item'>
            <Card design={displays[0]}/>
          </div>
          <div className='slide-item'><Card design={displays[1]}/></div>
          <div className='slide-item'><Card design={displays[2]}/></div>
          <div className='slide-item'><Card design={displays[3]}/></div>
          
          <a className="prev" onClick={()=>nextSlide(-STEP)}>&#10094;</a>
          <a className="next" onClick={()=>nextSlide(STEP)}>&#10095;</a>
      </div>
    ) : (
      <div className="row slider">
        {
          displays.map((item, index) => 
            <div className='slide-item' key={index}><Card design={item}/></div>
          )
        }
      </div>
    )
      }
    </div>
  )
}

export default Slide;