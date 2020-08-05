export const addProductToCart = (product) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        payload: product
    }
}

export const removeCartProduct = (cart) => {
    return {
        type: "REMOVE_CART_PRODUCT",
        payload: cart
    }
}

export const removeAllCartProduct = (cart) => {
    return {
        type: "REMOVE_ALL_CART_PRODUCT",
        payload: cart
    }
}