import React from 'react'

const Button =(props) => {

 
        console.log(" inside button :",props);
    return (
        <div>
        <button className="btn btn-info" onClick={props.addToCart}>Add to Cart</button><input type="hidden" value={props.prod}/>
       
        </div>
    );
}

export default Button;