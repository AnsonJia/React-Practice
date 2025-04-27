import { use, useState } from "react"

function toDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function InputChange(event:any){

    }

    function addTask(){

    }


    function deleteTask(index){
        
    }

    function moveTaskUp(index){
        
    }

    function moveTaskDown(index){
        
    }

    return(<div className="toDoList">
        <h1>To-Do-List</h1>



        <div>
            <input type="text" placeholder="Enter A New Task" value={newTask} onChange={InputChange}/>
            <button className="addButton" onClick={addTask}>Add</button>

        </div>

        <ol>
            {tasks.map((task, index) =>  
                <li key={index}> 
                    <span className="text">{task}</span> 
                    <button className="DelButton" onClick={() => deleteTask(index)}>Delete</button>
                </li>)}
            
            
            
            

        </ol>



    </div>);
}

export default toDoList