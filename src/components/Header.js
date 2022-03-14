import React from 'react'
import '../css/Header.css'
import {
  Button,
  } from "./styleComponents/HeaderButton";
import logos from '../images/logostransparent.png'
import search from '../images/search.png'
import {Link} from "react-router-dom";

const Header = () => {
  
  return (

    <div class="header">

      
      <img href = "home" class = "img" src={logos} alt="Rest-Inn-logos" width="225" height="auto"/>
      
      <div class = "search">

        <input type="text" class = "searchTerm" placeholder="Search.."/>
        <button type="submit" class="searchButton"><img src= {search} width = "30px" height= "30px"/></button>

      </div>

      <div class="header-right">

        <Link to="/">Home </Link>
        
        <Link to="/propertylisting"> Property Listing </Link>

        <Link to="/login">
        <Button> Login </Button>
        </Link>

        <Link to="/register">
        <Button> Register </Button>
        </Link>

      </div>

    </div>
  
  )

}

export default Header