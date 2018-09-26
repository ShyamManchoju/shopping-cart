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
        

        const products = (item,orderTotal)=>{
           
            return (
            <div className="">
             <div key={item.product.id}>{item.product.title}  <label>price :  {item.product.price*item.product.fullfillment}</label> <label>   quantity : </label>
             <label>{item.product.fullfillment}</label>
             </div>
          </div>)
          }
       
        console.log("Checkout itemsInCart :",this.props.itemsInCart);
        return (
        <div>
             {this.props.itemsInCart.map(products)}
             <div>orderTotal : {orderTotal}</div>
             <button>Place Order</button>
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