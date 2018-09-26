import React, {Component} from 'react'
import Button from './button'
import '../App.css'

class Product extends Component {

    render() {
    
    return (
        <div className="product">
            <div className="productImage">
             <img src= {this.props.id} alt="Image"></img>
            </div>
            <div className="productTitle">
            {this.props.title}
            </div>
            <div className="productTitle">
                price: {this.props.price} 
            </div>
            <div className="productTitle">Offers</div>
            <Button className="productTitle" addToCart={this.props.addToCart} id={this.props.id}></Button>
        </div>
    );
    }
}

export default Product;