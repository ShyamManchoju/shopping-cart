import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux'


class Checkout extends Component{

    render(){
        if(this.props.itemsInCart === undefined || this.props.itemsInCart.length === 0 ){
            return <div></div>
        }else{
        
        const  calcTotal= (total , item, index, array)=> {
            console.log("total + item.product.price*item.product.fullfillment",total);
            return item.product.price*item.product.fullfillment;
        }
        const items = this.props.itemsInCart;
        const orderTotal = Object.keys(items).reduce(function (previous, key) {
            return previous + items[key].product.price*items[key].product.fullfillment;
        }, 0);

       // const orderTotal =  this.props.itemsInCart.reduce(calcTotal());
        

        const products = (item)=>{
           
            return (
            <div key={item.product.id} className="row">
             <div className="col-md-4">Title : {item.product.title}  </div>
             <div className="col-md-4"> <label>price:  {item.product.price*item.product.fullfillment}</label></div>
             <div className="col-md-4"><label>Qty: {item.product.fullfillment}</label></div>
           
             
          </div>)
          }
       
        console.log("Checkout itemsInCart :",this.props.itemsInCart);
        return (
        <div className="row">
        <div className="row"> CheckOut !!</div>
        <div className="col-md-6">
        
        {this.props.itemsInCart.map(products)}
        
        </div>
        
        <div className="form-group col-md-6"> 
            <label className="label label-default"> orderTotal : {orderTotal}</label>
            <div><button className="btn btn-danger">Place Order</button></div> 
         </div>
        </div>
        );
        }
    }

}

const mapStateToProps = state => {
    
    const { products , itemsInCart } = state
    console.log('inside mapStateToProps CheckoutPage :', itemsInCart);
    return { itemsInCart };
  }

export default connect(mapStateToProps)(Checkout);