import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import Forest from "../images/HeroForest.jpg"
import Beach from "../images/HeroBeach.jpg"
import Venice from "../images/HeroVenice.jpg"
import "../css/RotatingImg.css"
import {
    Box,
    } from "./styleComponents/RotatingImgBox";

const RotatingImg = () => {
        return (
            <Box>
                <Carousel class = "container" showArrows={true} >

                    <div class = "height">
                        <img src={Forest} alt="Forest"/>
                        <p className="legend">Forest</p>
                    </div>
                    <div class = "height">
                        <img src={Beach} alt="Beach"/>
                        <p className="legend">Beach</p>
                    </div>
                    <div class = "height">
                        <img src={Venice} alt="Venice"/>
                        <p className="legend">Venice</p>
                    </div>

                </Carousel>
        
        </Box>
        );
    }

export default RotatingImg;