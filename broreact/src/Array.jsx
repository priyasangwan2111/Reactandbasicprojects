import React, { useState } from 'react';
function Array(){
    const[food,setFood]=useState(["apple","mango","orange"])
    function handleAdd(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value=""; // Clear the input field after adding
        setFood([...food, newFood]); // Add the new food item to the list
    }
    function handleRemove(){
        
    }
    return (
        <div>
            <h1>Food List</h1>
            <ul>
                {food.map((food, index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Add food item" />
            <button onClick={handleAdd}>Add food</button>
        </div>
    )
}
export default Array