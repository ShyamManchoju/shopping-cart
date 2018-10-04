const products = (products = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
        return  products = action.products.data.map((prod)=>{return {...prod, fullfillment:1}});
      case 'ADD_TO_CART':
        return products
      default:
        return products
    }
  }
  
  export default products