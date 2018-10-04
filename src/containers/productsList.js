import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { fetchProducts } from '../middleware/fetchProducts'
import { addToCart } from '../actions';
import Product from '../component/product'
import Cart from '../containers/cart'



class ProductsList extends Component {
  componentWillMount() {
    console.log('Fetching products.');
    this.props.fetchProductsList();
  }

  render() {
    const { products } = this.props;
    console.log("products  inside render :", products);
    const productsList = (prod) => {
      return <Product  id={prod.id} key={prod.id} title={prod.title}
        price={prod.price} inventory={prod.inventory} addToCart={() => { this.props.addToCart(prod) }}
      />
    }
    const product = products.map(productsList);

    return (
      <div className="row ">
        <div className="form-group col-md-7">
       
          {product}
       
        </div>
        <div className="col-md-5">
          <Cart />
          
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { products } = state
  console.log('inside mapStateToProps products :', products);
  return { products };
}

const mapDispatchToProps = {
  fetchProductsList: fetchProducts,
  addToCart: addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);