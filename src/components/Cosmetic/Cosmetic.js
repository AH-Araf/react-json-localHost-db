import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, _id} = props.a;

    const addToCart = (_id) =>{
        //console.log(addToCart)
        addToDb(_id); 
    }

    const removeFromCart = (_id) =>{
        removeFromDb(_id);
    }

    return (
        <div className='product'>
            <h2>Buy this: {name} </h2>
            <p>Only for: ${price}</p>
            <p>Id: {_id}</p>
            <button onClick={() => addToCart(_id)}>Add to cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;