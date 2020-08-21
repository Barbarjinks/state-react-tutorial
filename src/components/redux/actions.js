import * as actions from './actionTypes';


const productAdded = description => ({
    type: actions.PRODUCT_ADDED,
    payload: {
        description: "Product1" 
    }
});

export default productAdded
// export function productAdded(description){
//     return {  
//         type: actions.PRODUCT_ADDED,
//         payload: {
//            description: "Product1" 
    
//         }
//     };
// }