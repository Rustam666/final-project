import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Photo1 from  '../images/product-1.jpg'
const Slider =()=> (
    <div>products
    <AwesomeSlider>
        <div>
        <img src={Photo1} alt='#' />
        </div>
        <img src={Photo1}  alt='#'/>
        <img src={Photo1} alt='#'/>
    </AwesomeSlider>
    </div>
);

export default Slider
