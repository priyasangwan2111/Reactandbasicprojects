import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
function App() {
  // return(
  // <React.Fragment>
  //   <h1>Healthy Food</h1>
  //   <ul class="list-group">
  //     <li class="list-group-item">DAL</li>
  //     <li class="list-group-item">green vegetable</li>
  //     <li class="list-group-item">roti</li>
  //     <li class="list-group-item">dairy products </li>
  //     <li class="list-group-item">salad</li>
  //   </ul>
  // </React.Fragment>
  // );




  // USING MAP
  // let food=["dal","green vegetables","roti","salad","milk"];
    //Conditional rendering 1.if else 2.ternary 3.logical op
  // if(food.length==0){
  //   return <h1>i am still hungry</h1>
  // }
  return(
    <>
      <h1>Healthy Food</h1>
    
      <FoodItems/>
    </>
  );

}
export default App;