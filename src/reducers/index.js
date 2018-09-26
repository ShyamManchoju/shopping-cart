import { combineReducers } from 'redux'
import products from './products'
import addToCart from './addToCart';

export default combineReducers({
    products: products,
    itemsInCart: addToCart,
})