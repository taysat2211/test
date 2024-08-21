import React from 'react';
import './card.css';

function Card(props) {
    const {image,title, address} = props.design;
  return (
    <a className="card text-end" href="#">
        <img src={image} className="card-img" alt="thumb"></img>
        <div className="card-body">
          <b className='card-title'>{title}</b>
          <p>{address}</p>
        </div>
    </a>
  )
}

export default Card