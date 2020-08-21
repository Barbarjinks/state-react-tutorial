import * as actions from './actionTypes';


export const productAdded = description => ({
    type: actions.PRODUCT_ADDED,
    payload: {
        description: "Product1" 
    }
});

// export function productAdded(description){
//     return {  
//         type: actions.PRODUCT_ADDED,
//         payload: {
//            description: "Product1" 
    
//         }
//     };
// }