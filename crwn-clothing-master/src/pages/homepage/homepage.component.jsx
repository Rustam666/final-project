import React,{useEffect} from 'react';

import Section1 from '../../components/section1/section';
import Section2 from "../../components/section2/section2";
import './homepage.styles.scss';
import Ship from "../../components/ship-section/ship";
import Slider from "../../components/carousel/carousel";
import NewCollection from "../../components/new-collection/new-collection";
import NewShop from "../../components/shop.new/newshop";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";
import {setCollections} from "../../redux/shop/shop.reducer";





const HomePage =  connect(null,{setCollections})(props => {
    useEffect(() => {
    fetch(`http://18.215.250.222:8087/products`)
        .then(results => results.json())
        .then(results => {
            console.log('results',results)
            props.setCollections(results);
        })
},[])

return (
<div className="homepage">
  <Section1/>
  <Ship/>
  <Section2/>

<NewCollection/>
<NewShop/>



    </div>

);})

export default HomePage;
