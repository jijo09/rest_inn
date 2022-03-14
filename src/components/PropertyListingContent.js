import React,{useState,useEffect} from 'react';
import PropertyCard from "./PropertyCard";

const PropertyListingContent = () => {
  
  const [dbs , setdbs] = useState([{
    id:0,
    title:"",
    price: 0,
    type:"",
    details:"",
    imageSrc : null
  }]);


  useEffect(()=>{

    const URLdb = 'http://localhost:5000/dbs'
    //MAKE AN AJAX request

    fetch(URLdb)
    .then(response=>response.json())

    .then(json=>{

      setdbs(json)
    })
    .catch(err=>console.log(err))

  }, [])

  
  return (

    <section id="section-resort-list">

      <div>
      
          <br/>
          <br/>
          <br/>

          <div className="grid grid-gap-1 grid-row-gap-2">

          {dbs.map

          (db=>

            <PropertyCard id={db.id} title={db.title} image ={db.img} price={db.price} type={db.type} details={db.details} />
            
          )}

          <br/>
          <br/>
          <br/>
  
          </div>

      </div>

    </section>

  );

}

export default PropertyListingContent