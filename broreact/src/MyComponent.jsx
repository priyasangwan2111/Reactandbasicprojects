import React,{ useState } from 'react';
function MyComponent(){
    const[name,setName]=useState("laddu"); //useState hook to create a state variable 'name' with initial value 'laddu'
    const updateName=()=>{
        setName("priya"); //updating the state variable
        //this will re-render the component with the new name
}
    return<div>
        <p>name:{name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>
}
export default MyComponent