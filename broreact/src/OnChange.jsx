import React ,{ useState } from 'react';
function OnChange() {
    const[name,setName]=useState("");
    function handlechange(event){
        setName(event.target.value);
    }
    return (<div>
        <input value={name}onChange={handlechange}/>
        <p>name:{name}</p>
        {/* The value of the input is controlled by the state variable 'name' */}
        {/* When the input changes, handlechange updates the state with the new value */}
    </div>)
}
export default OnChange;