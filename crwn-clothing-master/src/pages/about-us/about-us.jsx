import React from 'react';
import '../../components/bootstrap/bootstrap-grid.css'
import '../../components/bootstrap/style.css'
import  '../../components/bootstrap/bootstrap-reboot.css';
import '../../components/main.scss';
import Ship from "../../components/ship-section/ship";
import Banner from "../../components/banner/banner";

const AboutUs =()=> (
<div className='aboutUs'>
    <Banner title='About'/>
    <Ship/>

</div>
);

export default AboutUs