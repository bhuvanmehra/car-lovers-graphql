import React from 'react';
import '../style/style.css'

const Card = (props) => {
  if(typeof(props.carModel) === 'undefined') return null;

  return(
    <div>
      <img className="materialboxed imageCard" alt={props.carModel.name} src={props.carModel.imageUrl} />
      <div style={{margin: '1em'}}>
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <blockquote>
            <div className="model" style={{fontSize: '1.25em', fontWeight: 'bold'}}>Model - {props.carModel.name}</div>
            <div className="price">Price - ${props.carModel.price}</div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Card;
