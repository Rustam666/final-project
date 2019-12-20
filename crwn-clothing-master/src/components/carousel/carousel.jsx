import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Photo1 from  '../images/product-1.jpg'
import CollectionPreview from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";
import "./slider.scss"
const Slider =({ collections })=> (
    <div>products
    <AwesomeSlider className='slider'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <div key={id} className='collections-overview'> <CollectionPreview  {...otherCollectionProps} /> </div>
        ))}
        </AwesomeSlider>
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(Slider)
