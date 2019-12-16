import React from 'react';

import Section1 from '../../components/section1/section';
import Section2 from "../../components/section2/section2";
import './homepage.styles.scss';
import Ship from "../../components/ship-section/ship";
import Slider from "../../components/carousel/carousel";
import NewCollection from "../../components/new-collection/new-collection";
import Footer from "../../components/footer/footer";


const HomePage = () => (

    <div className="homepage">
  <Section1/>
  <Ship/>
  <Section2/>
<Slider/>
<NewCollection/>



    </div>

);

export default HomePage;
