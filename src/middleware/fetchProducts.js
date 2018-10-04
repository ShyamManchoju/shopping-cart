//import serviceResponse from './middleware/serviceResponse.json'
import axios from 'axios';

export const fetchProducts = function fetchProducts() {
    console.log('I am herer');
 return function (dispatch) { 
   
  const request  =  axios.get("https://fathomless-caverns-72794.herokuapp.com/products");
  
  console.log("inside reducer : ");

  request.then((response)=>{
        //console.log(" response :", JSON.stringify(response.body));
        dispatch({
           type:'FETCH_PRODUCTS',
           products : response
       });
    }).catch('Products list is taking much time');
 }
}


