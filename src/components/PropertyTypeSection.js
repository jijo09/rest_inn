import React,{useState,useEffect} from 'react';
import Card from "./Card";
import "../css/FeaturedResort.css"
import "../css/Card.css"

const PropertyTypeSection = () => {
  
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
      
          <h1>Property Type Section</h1><br/>
          <br/>
          <br/>
          <br/>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

          {resorts.map

            (resort=>

              ( <Card id={resort.id} title={resort.title} image ={resort.img} price={resort.price} />)
              
            )}
  
          </div>
          <br/>
          <br/>
          <br/>
          <br/>

      </div>

    </section>

  );
};

export default PropertyTypeSection;
