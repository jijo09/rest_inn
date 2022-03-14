import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Card.css"

const propertytypecard = (props) => {
  return  (

    <div className="resort-card">

      <Link to = {`propertytype/${props.type}`}> 
          <img src={props.image} alt=""/>   
      </Link>

      <div className="resortContent">
          <h2 className='card-title'>{props.type}</h2>
      </div>

  </div>

  );
};

export default propertytypecard;
