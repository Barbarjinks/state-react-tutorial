import React, { useReducer } from 'react';
import { useDispatch, Provider } from "react-redux";
import './Product.css';

const currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}

function getTotal(cart) {
    const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, currencyOptions)
}

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
    },
    {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5
    },
    {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
    }
];

function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return [...state, action.product];
        case 'REMOVE':
            const productIndex = state.findIndex(item => item.name === action.product.name);
            if(productIndex < 0) {
                return state;
            }
            const update = [...state];
            update.splice(productIndex, 1);
            return update;
        default:
            return state;
    }
}

export default function Product() {
    const [cart, setCart] = useReducer(cartReducer, []);

    const dispatch = useDispatch();

    function add(product) {
        setCart({ product, type: 'ADD' });
    }

    function remove(product) {
        setCart({ product, type: 'REMOVE' });
        }

    return(
        <div className="wrapper"> 
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total: £{getTotal(cart)} </div>
            <div>
            {products.map(product => (
                <div key={product.name}>
                    <div classname="product">
                        <span role="img" aria-label={product.name}>{product.emoji}</span>
                    </div>
                    <button onClick={() => dispatch(add(product))}>Add</button>
                    <button onClick={() => remove(product)}>Remove</button>
                </div>
            ))}    
            </div>
        </div>
    )
}