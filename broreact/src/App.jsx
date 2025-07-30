//render list means using map function sort function etc

// import List from './List.jsx'
// function App(){
//   return (<List/>)
// }
// export default App;



//click event=an interaction when a user clickson a specific element.
//we can ewspond to clicks by passing a callback to the onclick event handler.

// import Button from './Button.jsx'
// function App(){
//   return(<Button/>)
// }
// export default App;



//react hook: special function that allows functional componenets.
//to use react features without writing a class.{usestate,useEffect,useContext,useReducer}
//useState is a hook that allows functional components to have state.allows the creation of state variables.and setter functions to update them.

// import MyComponent from './MyComponent.jsx'
// function App(){
//   return (<MyComponent/>)
// }
// export default App;


//onchange=event handler for input elements that triggers when the value of an input changes.ex <input>,<select>,<textarea>.

// import OnChange from './OnChange.jsx'
// function App(){
//   return(<OnChange/>)
// }
// export default App;


//updater function:a function passed as an argument to setstate() usually 
//allow for safe updates based on the previou state
//used with multiple state updates and asynchronous updates.


// import Updater from './Updater.jsx'
// function App(){
//   return(<Updater/>)
// }
// export default App;



//UPDATE OBJECTS IN REACT
//updating objects in react involves creating a new object with the updated properties and using setState
// import Objecti from './Objecti.jsx'
// function App(){
//   return(<Objecti/>)
// }
// export default App;



//UPDATE ARRAYS IN REACT
//updating arrays in react involves creating a new array with the updated elements and using setState

// import Array from './Array.jsx'
// function App(){
//   return(<Array/>)
// }
// export default App;



//TO DO LIST
import Todolist from './Todolist.jsx'

const App = () => {
  return (
    <Todolist/>
  )
}

export default App