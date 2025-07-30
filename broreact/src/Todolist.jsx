import React ,{useState}from 'react'

const Todolist = () => {
    const [tasks,setTasks]=useState(["go to college","go to gym","go to market"]);
    const [newTask,setNewTask]=useState("");
    function handleinputChange(event){
        setNewTask(event.target.value); // Update the newTask state with the input value
    }
    function handleAddTask(){
        
    }
    function handledeletetask(index){

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

  return (
    <div className="to-do-list">
        <h1>To-Do List</h1>
        <input 
            type="text" 
            value={newTask} 
            onChange={handleinputChange} 
            placeholder="Add a new task" 
        />
        <button className="add-button"onClick={handleAddTask}>Add Task</button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => handledeletetask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                    <button  className="move-button"onClick={() => moveTaskDown(index)}>Down</button>
                </li>
            ))}
        </ul>

    </div>
    
  )
}

export default Todolist