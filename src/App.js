import React, { Component } from 'react';
import './App.css';
import ProductsList from './containers/productsList'
import {Route,NavLink} from 'react-router-dom'
import Checkout from './containers/checkout'

class App extends Component {

  render (){
    return (
        <div >
        <nav className="App">
        <NavLink to="/productsList"> Products List  </NavLink>
        </nav>
        <div  className="container">
        <Route path="/productsList" component={ ProductsList }></Route>
        <Route path="/checkout" component={Checkout} ></Route>
        </div>
        
        
        </div>

    );
}
}
export default App;
 