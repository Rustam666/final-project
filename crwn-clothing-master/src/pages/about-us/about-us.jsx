import React from 'react';
import '../../components/bootstrap/bootstrap-grid.css'
import '../../components/bootstrap/style.css'
import  '../../components/bootstrap/bootstrap-reboot.css';
import '../../components/main.scss';
import Ship from "../../components/ship-section/ship";
import Banner from "../../components/banner/banner";
import DynamicNumbers from "../../components/dynamic-numbers-section/dynamic-numbers";

const AboutUs =()=> (
<div className='aboutUs'>
    <Banner title='About'/>

    <Ship/>
    <DynamicNumbers/>

</div>
);

export default AboutUs