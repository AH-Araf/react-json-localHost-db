import React from 'react';
import { useEffect,useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    } , [])
    // const cosmetics = [
    //     {id:1, name: 'Alta', price: 100},
    //     {id:2, name: 'Polish', price: 200},
    //     {id:3, name: 'Powder', price: 300},
    //     {id:4, name: 'Cream', price: 400},
    //     {id:5, name: 'Loation', price: 500},
    // ]
    return (
        <div>
            <h1>Welcome to my store</h1>
            {
                cosmetics.map(a => <Cosmetic 
                    key={a._id}
                    a = {a}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;