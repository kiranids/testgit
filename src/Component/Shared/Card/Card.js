import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, imgage, children }) => {
    return (

<div className='col-md-6  cards'>
            <img src={imgage} className="img-fluid  my-3 animated" alt='us stocks'/>
            <h5 className=' my-3'>{title}</h5>
            </div>

     
    );
};

export default Card;