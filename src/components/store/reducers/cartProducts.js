
import ItemService from './../../../services/itemService';

const cartProductsReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            /* 
                Algoritm to:
            - add items to the cart
            - check if the item is already present
            - if so, don't add, just sum the quantities
            */ 
            const prodCode = action.payload.product.id;
            // check if there is another product with the same code in the cart
            let found = false;
            let cart = [...state]; //copy of the state

            for (let i = 0; i<cart.length; i++){
                const prod = cart[i];
                if (prod.product.id === prodCode){
                    prod.quantity += action.payload.quantity;
                    found = true;
                }
            }

            // the cart does not contain that iem
            if(!found){
                cart.push(action.payload);
            }

            // update server
            let service = new ItemService();

            

            service.saveCart('Ingrid', cart);



            return cart;

            case "REMOVE_PRODUCT":
            /*
             * create of the state
             * travel the array
             * look for the item with id = action.payload
             * remove that item 
             * return the copy
             */
            
            /* let copy = [...state];
            fot (let i=0; i<copy.length; i++){
                if (copy[i].product.id === action.payload){
                   return copy.splice(i, 1);
                }
            } */

                return [...state.filter( pc => pc.product.id !== action.payload )];

            default: 
                return state;
    }
};
// copying items from state array and adding the new one

export default cartProductsReducer;