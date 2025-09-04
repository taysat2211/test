import React from 'react';
import './card.css';

function Card(props) {
    const {image,title, subtitle, description} = props.design;
  return (
    <a className={`card ${props.textAlign}`} href="#">
        <img src={image} className="card-img" alt="thumb"></img>
        <div className="card-body" style={props.cardBodyStyle}>
          <b className='card-title'>{title}</b>
          {subtitle ? <p>{subtitle}</p> : null}
          {description ? <p className='description'>{description}</p> : null}
        </div>
    </a>
  )
}

export default Card