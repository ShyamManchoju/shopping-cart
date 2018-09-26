const addToCart = (itemsInCart = [], action) => {
    console.log("inside reducer ADD_ITEM_COUNT", action.product);
    switch (action.type) {
        case 'ADD_TO_CART':
            return itemsInCart.find((item) => action.product.id === item.product.id) ? itemsInCart : [...itemsInCart, { product: action.product }]
        case 'INCREMENT_ITEM_COUNT': 
            return  cartItemsIncrement(itemsInCart,action);
        case 'DECREMENT_ITEM_COUNT':
            return cartItemsDecrement(itemsInCart,action);
        case 'REMOVE_ITEM_IN_CART':
            return removeItemsInCart(itemsInCart,action);
        case 'CHECKOUT':
            return itemsInCart
        default:
            return itemsInCart
    }
}

const removeItemsInCart = (itemsInCart,action) => {
    let productsInCart = itemsInCart.filter((item) => action.product.id !== item.product.id);
    return [...productsInCart];
}

const cartItemsIncrement = (itemsInCart,action) => {
    let productIndex = itemsInCart.findIndex((item) => action.product.id === item.product.id);
    let product = { ...itemsInCart[productIndex] };
    if (product.product.fullfillment < product.product.inventry) {
        product.product.fullfillment++;
        itemsInCart[productIndex] = product;
    }
    return [...itemsInCart];
}
const cartItemsDecrement = (itemsInCart,action) => {
    let productIndex = itemsInCart.findIndex((item) => action.product.id === item.product.id);
    let product = { ...itemsInCart[productIndex] };
    console.log(' product product.inventry. :', product.product.inventry);
    if (product.product.fullfillment > 1 && product.product.fullfillment <=  product.product.inventry) {
        console.log(" product increment :", product);
        product.product.fullfillment--;
        itemsInCart[productIndex] = product;
    }
    return [...itemsInCart];
}

export default addToCart