import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
import '../bootstrap/style.css'

const CollectionPreview = ({ title,items, id }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4 )
        .map(item => (
          <CollectionItem key={item.id} item={item} collectionId={id} />
        ))}
    </div>


  </div>

);

export default CollectionPreview;
