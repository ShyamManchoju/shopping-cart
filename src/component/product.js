import React, { Component } from 'react'
import Button from './button'
import '../App.css'

class Product extends Component {

    render() {

        return (
            <div className="product col-md-5">

                    <div className="row">
                    <div className="col-md-4">
                        <img className="img-thumbnail" src={this.props.id} alt="Image"></img>
                    </div>
                    <div className="col-md-8">
                    <div className="row">
                    Title:{this.props.title}</div>
                    <div className="row">
                    Price:{this.props.price}</div>
                    <div className="row">
                    <Button className="btn-primary" addToCart={this.props.addToCart} id={this.props.id}></Button>
                    </div>
                    </div>
                    </div>

            </div>
        );
    }
}

export default Product;