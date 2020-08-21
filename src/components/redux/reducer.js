import * as actions from './actionTypes';

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.PRODUCT_ADDED:
            return [
                ...state,
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
        case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id);
        default:    
            return state;
    }
}