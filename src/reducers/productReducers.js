const productReducers = (state = {data: []}, action) => {
	switch(action.type){
		case "LOAD_PRODUCTS":
        	return [action.payload];

		default:
			return state;
	}
}

export default productReducers;