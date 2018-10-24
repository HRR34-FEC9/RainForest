import React from 'react';

const Item = (props) => (
  <div>
    <div className='item-name'>{props.data.name}</div>
    <img className='item-image' src={props.data.image_url}/>
    <div className='item-desc'>{props.data.short_desc}</div>
    <div className='item-rating'>{props.data.rating}</div>
    <div className='item-reviews'>{props.data.reviews}</div>
    <div className='item-price'>{props.data.price}</div>
  </div>
);

export default Item;