import React, { useState, useEffec } from 'react'
import './slide.css';
import Card from '../card/card';

function Slide(props) {

  const items = props.items;
  const MAX_LENGTH = 4;
  const slideLength = items.length > MAX_LENGTH ? MAX_LENGTH : items.length;
  
  let [displays, setDisplays] = useState(items.slice(0,slideLength));
  let [pos, setPos] = useState(slideLength);

  // useEffect(() => {
  //   if(items.length > 4){
  //     const interval = setInterval(() => {
  //       nextSlide(step);
  //     }, 5000);
  //   }
  // },[cur]);
  const nextSlide = (next) => {
    if(next){
      let nextPos = (pos + next) <= items.length ? pos + next : slideLength;
      setPos(nextPos);
      setDisplays(items.slice(pos-4, pos));
    }
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
          
          <a className="prev" onClick={()=>nextSlide(-1)}>&#10094;</a>
          <a className="next" onClick={()=>nextSlide(1)}>&#10095;</a>
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