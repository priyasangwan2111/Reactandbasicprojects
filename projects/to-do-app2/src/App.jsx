import AppName from './components/AppName';
import AddTodo from './components/AddTodo';

import TodoItems from './components/TodoItems';
import './App.css';
function App() {
  const todoItems=[
    {name:"buy milk",
    dueDate:"4/10/25",
  },
  {name:"go to college",
    dueDate:"4/10/25",
  },
]
  return (<center className='todo-container'>
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}></TodoItems>
    
    


    
    
  </center>
  )
}
export default App;