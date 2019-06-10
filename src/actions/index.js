export function loadProducts(data) {
	return {type: "LOAD_PRODUCTS", payload: data};
}

export function sendCartData(data) {
	return {type: "ADD_CART", payload: data};
}