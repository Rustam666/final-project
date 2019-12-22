import SHOP_DATA from './shop.data';
import React from "react";
import ReactDOM from "react-dom";
import ContentFeed from "../../components/fetch/fetch";

const INITIAL_STATE = {
  collections: SHOP_DATA
};




const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
