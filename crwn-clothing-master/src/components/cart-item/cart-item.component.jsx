import React from 'react';

import './cart-item.styles.scss';

import '../bootstrap/style.css'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (

      <div className="product">
          <a href="#" className="img-prod">
              <img className="img-fluid" src={imageUrl} alt="no fucks given"/>
              <span className="status">30%</span>

          </a>
          <div className="text py-3 px-3">
              <h3><a href="#">{name}</a></h3>
              <div className="d-flex">
                  <div className="pricing">
                      <span className="mr-2 price-dc">{quantity} x ${price}</span>
                  </div>
              </div>
          </div>
      </div>
);

//fuck fuck

export default CartItem;
