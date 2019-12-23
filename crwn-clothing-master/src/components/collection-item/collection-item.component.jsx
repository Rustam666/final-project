import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { Link } from 'react-router-dom';
import './collection-item.styles.scss';
import '../bootstrap/style.css'

const CollectionItem = ({ item, addItem, ...rest }) => {
  const { name, price, imageUrl } = item;
  console.log(rest)

  return (

<div className='card'>
    <div className='collection-item  '>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer ff'>
        <Link className='ff'to={`/product/${rest.collectionId}/${item.id}/`}>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </Link>
      </div>
      <CustomButton className='custom-button2 custom-button' onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
</div>
    /*  </Link>*/
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
