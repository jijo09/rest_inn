import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Card.css";

const Card = (props) => {
  return  (

    <div className="resort-card">

      <Link to = {`/${props.type}/${props.id}`}> 
          <img src={props.image} alt=""/>   
      </Link>

      <div className="resortContent">
          <h3 className='card-title'>{props.title}</h3>
          <p className='card-price'>${props.price} per night</p>
      </div>

  </div>

  );
};

export default Card;
