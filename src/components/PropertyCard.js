import React from 'react';
import { Link } from 'react-router-dom';
import "../css/PropertyCard.css"

const propertycard = (props) => {
  return  (

<Link to = {`/dbs/${props.id}`} style={{ textDecoration: 'none' }} className = "link">
    <div className="resort-card-property">

          <img className = "resort-card-property img" src={props.image} alt=""/>   

            <div className="resortContent-property">
            <h2>{props.title}</h2><br/>
          <br/>
          <h2>Property Type : {props.type} </h2><br/>
          <b><h2>Description</h2><br/></b>
          <h3 className='card-title'>{props.details}</h3>
          <br/><br/>
          <h2>Price : $ {props.price}</h2>
       

      </div>
      

  </div>
  </Link>
  );
};

export default propertycard;
