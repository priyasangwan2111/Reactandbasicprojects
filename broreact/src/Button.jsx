function Button(){
    // const handleClick = () => console.log("Button clicked!");
    //return(<button onClick={handleClick}>click me</button>)

    
    const handleClick=(e)=>e.target.textContent="clicked";
    //e.target refers to the element that triggered the event
    //e is the event object that contains information about the event
    //e.target.textContent changes the text of the button to "clicked"
    //e.target.value can be used to get the value of an input element
    //onDoubleClick can be used to handle double click events
    return (<button onClick={(e)=>handleClick(e)}>click me</button>)
    
}
export default Button;