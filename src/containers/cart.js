import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { addItem, removeItem, removeItemInCart } from '../actions'
import { Link } from 'react-router-dom';
import Checkout from './checkout'

//import {addItemCount} from '../actions'


class Cart extends Component {

  
  render() {
    console.log("Inside Cart ",this.props.itemsInCart);
    if(this.props.itemsInCart.length ===0 ){
      return ( <div > 
      <h1>Cart Items !!</h1>
      <h3>Please add Items to the Cart </h3>
      </div>);
    }

    const products = (item)=>{
      return (
      <div className="cartItems">
       <div key={item.product.id}>
       <button className="cartItemsRemoveBtn" onClick={()=>this.props.removeItemInCart(item.product)}>remove</button>{item.product.title}  
       <label className="cartItems"> price : {item.product.price*item.product.fullfillment}</label><label> quantity : </label>
       <button onClick={()=>{this.props.removeItem(item.product)}}>-</button>
       <input style={style} type="text" value={item.product.fullfillment}/>
       <button onClick={()=>{this.props.addItem(item.product)}}>+</button>
       </div>
    </div>)}

    const style = {
      width:'10px'
    }

    return (
      <div > 
      <h1>Cart Items !!</h1>
      <div>
          {this.props.itemsInCart.map(products)}
      </div>
      <Link to="/checkout"> Checkout </Link>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  //state.itemsInCart = itemsInCart || []
  const { products , itemsInCart } = state
  state.itemsInCart = itemsInCart || []
  console.log('inside mapStateToProps addToCart :', itemsInCart);
  console.log('inside mapStateToProps products :', products);
 
  return { itemsInCart };
}
const mapDispatchToProps = {
  addItem : addItem,
  removeItem: removeItem,
  removeItemInCart: removeItemInCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);