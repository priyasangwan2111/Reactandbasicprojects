import Item from "./Item";
const FoodItems =()=> {
    let foodItems=["dal","green vegetables","roti","salad","milk"];
    return(
        <ul className="list-group">
        {foodItems.map((item)=>(
          <Item key={item} foodItems={item}></Item>
        ))}
      </ul>
      )
    
};
export default FoodItems;