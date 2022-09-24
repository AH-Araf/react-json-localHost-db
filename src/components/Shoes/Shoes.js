import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first =10;
    const second = 13;
    const result = multiply(first, second);
    const sum = add(first, second)
    return (
        <div>
            <h3>This is Shoes Compo</h3>
            <p>Multiply: {result}, Add: {sum}</p>
        </div>
    );
};

export default Shoes;