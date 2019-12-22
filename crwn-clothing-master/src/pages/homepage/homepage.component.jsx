import React from 'react';

import Section1 from '../../components/section1/section';
import Section2 from "../../components/section2/section2";
import './homepage.styles.scss';
import Ship from "../../components/ship-section/ship";
import Slider from "../../components/carousel/carousel";
import NewCollection from "../../components/new-collection/new-collection";
import NewShop from "../../components/shop.new/newshop";
import CollectionItem from "../../components/collection-item/collection-item.component";





const HomePage = () => (

    <div className="homepage">
  <Section1/>
  <Ship/>
  <Section2/>
<Slider/>
<NewCollection/>
<NewShop/>



    </div>

);

export default HomePage;
