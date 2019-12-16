import React from 'react';
import '../../components/bootstrap/bootstrap-grid.css'
import '../../components/bootstrap/style.css'
import  '../../components/bootstrap/bootstrap-reboot.css';
import '../../components/main.scss';
import Ship from "../../components/ship-section/ship";
import SectionAboutUs from "../../components/section-about-us/about-us-section";

const AboutUs =()=> (
<div className='aboutUs'>
    <SectionAboutUs first={'About'} second={'About us'}/>
    <Ship/>

</div>
);

export default AboutUs