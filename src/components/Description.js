import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "../css/Description.css"


const DescriptionPage = () => {

 const [db,setdbs]=  useState({
     id:0,
     title :"",
     img : null,
     description :"",
     details:"",
     price : 0
 })

 const {id} = useParams()

 useEffect(()=>{

    const URLdb = `http://localhost:5000/dbs/${id}`
    //MAKE AN AJAX request

    fetch(URLdb) // GET
    .then(response=>response.json())

    .then(json=>{
    
      setdbs(json)
    })
    .catch(err=>console.log(err))

 },[])

  return (
      
    <div>

    
    <main>
        <section id="description-section">
            <div className="container">

                <img src={db.img} alt=""/>
            
                <div className="description-content-area">
                    <br/>
                    <h2>{db.title}</h2>
                    <br/>
                    <h2>Property Type : {db.type} </h2><br/>
                    <b><h2>Description</h2><br/></b>
                    <h3>{db.details}</h3>
                    <br/><br/>
                    <h2>Price : $ {db.price}</h2>
            </div>
            </div>
        </section>
    </main>

</div>
  )
}

export default DescriptionPage