import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

import {setCollections} from '../../redux/shop/shop.reducer';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


const ShopPage = connect(null,{setCollections})(props => {
    useEffect(() => {
        fetch(`http://18.215.250.222:8087/products`)
            .then(results => results.json())
            .then(results => {
                console.log('results',results)
                props.setCollections(results);
            })
    },[]);

    return (
    <div className='shop-page'>
        <Route exact path={`${props.match.path}`} component={CollectionsOverview} />
        <Route path={`${props.setCollections.hats}`} component={CollectionPage} />
    </div>
)});

export default ShopPage;
