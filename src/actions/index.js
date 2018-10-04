
/*export const fetchProducts = (products) => {
  console.log(" inside fetchProducts Action", products);
  return {
    type: 'FETCH_PRODUCTS',
    products: products
  }
}*/

export const addToCart = (product) => {
  console.log(" inside addToCart Action", product);
  return {
    type: 'ADD_TO_CART',
    product: product 
  }
}

export const addItem = (product) => {
  console.log(" inside addItem Action", product);
  return {
    type: 'INCREMENT_ITEM_COUNT',
    product: product 
  }
}

export const removeItem = (product) => {
  console.log(" inside removeItem Action", product);
  return {
    type: 'DECREMENT_ITEM_COUNT',
    product: product 
  }
}

export const removeItemInCart = (product) => {
  console.log(" inside removeItemInCart Action", product);
  return {
    type: 'REMOVE_ITEM_IN_CART',
    product: product 
  }
}
