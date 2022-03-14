import React,{useState,useEffect} from 'react';
import PropertyCard from "./PropertyCard";

const PropertyListingContent = () => {
  
  const [resorts , setResorts] = useState([{
    id:0,
    title:"",
    price: 0,
    imageSrc : null
  }]);


  useEffect(()=>{

    const URLresort = 'http://localhost:5000/resorts'
    //MAKE AN AJAX request

    fetch(URLresort)
    .then(response=>response.json())

    .then(json=>{

      setResorts(json)
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

          {resorts.map

          (resort=>

            ( <PropertyCard id={resort.id} title={resort.title} image ={resort.img} price={resort.price} />)
            
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