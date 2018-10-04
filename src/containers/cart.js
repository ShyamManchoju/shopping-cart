import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { addItem, removeItem, removeItemInCart } from '../actions'
import { NavLink } from 'react-router-dom';
import Checkout from './checkout'

//import {addItemCount} from '../actions'


class Cart extends Component {

  
  render() {
    console.log("Inside Cart ",this.props.itemsInCart);
    if(this.props.itemsInCart.length ===0 ){
      return ( <div > 
      <h1>Cart Items !!</h1>
      <h4>Please add Items to the Cart </h4>
      </div>);
    }

    const products = (item)=>{
      return (
      <div key={item.product.id} className="row form-group">
       
       <div className="col-md-1">
        <button className="btn btn-danger" onClick={()=>this.props.removeItemInCart(item.product)}>x</button> 
       </div>
       <div className="col-md-4">
          Item: {item.product.title} 
       </div>
        
       <div className="row col-md-3">
          amt: {item.product.price*item.product.fullfillment}
       </div>
       <div className="row col-md-4">
        <div className="col-md-3">Qty:</div>
        <div className="col-md-3"><button className="btn btn-success" onClick={()=>{this.props.removeItem(item.product)}}>-</button></div>
        <div className="col-md-3"><input className="input-lg" style={style} type="text" value={item.product.fullfillment}/></div>
        <div className="col-md-3"><button className="btn btn-success" onClick={()=>{this.props.addItem(item.product)}}>+</button></div>
       </div>
       
       
    </div>)}

    const style = {
      width:'10px'
    }

    return (
      <div className="row"> 
      <div ><h1>Cart Items !!</h1></div>
      <div className="row">
          {this.props.itemsInCart.map(products)}
      </div>
      <div >
      <NavLink className="row btn btn-success" to="/checkout"> Checkout </NavLink>
      </div>
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