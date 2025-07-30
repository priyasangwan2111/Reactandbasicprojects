import React ,{ useState } from 'react';
function Objecti(){
    const[car,setCar]=useState({year:2024,model:"innova"});
    function handleyear(event){
        setCar({...car,year:event.target.value}); //using spread operator to create a new object with updated year
    }
    function handlemodel(event){

    }
    return(
        <div>
            <p>yor fav car is:{car.year}{car.model}</p>
            <input type="number" value={car.year} onChange={handleyear}/><br/>
            <input type="text" value={car.model} onChange={handlemodel} /><br/>
        </div>

    )
}
export default Objecti;