const cartReducers = (state = {cart: []}, action) => {
    switch(action.type) {
        case "ADD_CART":
            return {cart: [...state.cart.concat(action.payload)]};
        
        default:
            return state;
    }
}

export default cartReducers;