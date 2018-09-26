//import serviceResponse from './middleware/serviceResponse.json'

export const fetchProducts = function fetchProducts() {
    console.log('I am herer');
 return function (dispatch) { 
  const request  =  fetch("./middleware/serviceResponse.json");
  console.log("inside reducer : ");

  request.then((response)=>{
        //console.log(" response :", JSON.stringify(response.body));
        dispatch({
           type:'FETCH_PRODUCTS',
           products : [  
            { id:101, title:"TV",price:20000, inventry:5 },
            { id:111, title:"Mobile", price:23000, inventry:3 },
            { id:108, title:"Fridge", price:40000, inventry:7 },
            { id:167, title:"AirConditioner", price:30000, inventry:2 }
         ]
       });
    }).catch('Products list is taking much time');
 }
}


