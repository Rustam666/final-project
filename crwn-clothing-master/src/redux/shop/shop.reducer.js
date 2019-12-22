import SHOP_DATA from './shop.data';
import React from "react";
import ReactDOM from "react-dom";

  const INITIAL_STATE = {
    collections: []
  };

const SET_COLLECTIONS = 'SET_COLLECTIONS';

export const setCollections = payload => ({
  type: SET_COLLECTIONS,
  payload
})


const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
