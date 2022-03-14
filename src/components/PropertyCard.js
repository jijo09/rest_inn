import React from 'react';
import { Link } from 'react-router-dom';
import "../css/PropertyCard.css"

const propertycard = (props) => {
  return  (

<Link to = {`/resorts/${props.id}`}>
    <div className="resort-card-property">

    

          <img className = "resort-card-property img" src={props.image} alt=""/>   

            <div className="resortContent-property">
            <h1>Property Name</h1><br/>
          <h2 className='card-title'>{props.title}</h2>
          <br/><br/><br/>
          <b><h2>Description</h2><br/></b>
          <h3 className='card-title'>{props.title}</h3>
       

      </div>
      

  </div>
  </Link>
  );
};

export default propertycard;
