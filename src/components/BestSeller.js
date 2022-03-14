import React,{useState,useEffect} from 'react';
import Card from "./card.js";
import "../css/FeaturedResort.css"
import "../css/Card.css"

const BestSeller = () => {
  
  const [dbs , setdbs] = useState([{
    featured:false,
    id:0,
    title:"",
    price: 0,
    type:"",
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
      
      <h1>Best Seller</h1><br/>
          <br/>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

          {
          
          dbs.filter((db)=>{return db.featured===true;}).map(db=>(<Card id={db.id} title={db.title} type={db.type} image={db.img} price={db.price} featured={db.featured}/>))
              
          }

          <br/>
          <br/>
          <br/>
  
          </div>

      </div>

    </section>

  );
};

export default BestSeller;
