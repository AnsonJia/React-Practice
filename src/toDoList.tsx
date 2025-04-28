import { useState } from "react"
import styles from './toDoList.module.css'

function toDoList(){
    const [tasks, setTasks] = useState(["item1", "item2"]);
    const [newTask, setNewTask] = useState("");

    function InputChange(event:any){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function moveTaskUp(index){
        
    }

    function moveTaskDown(index){
        
    }

    return(<div className={styles.toDoList}>
        <h1 className={styles.todoHeader}>To-Do-List</h1>

        <div>
            <input type="text" placeholder="Enter A New Task" value={newTask} onChange={InputChange}/>
            <button className={styles.addButton} onClick={addTask}>Add</button>

        </div>

        <ol>
            {tasks.map((task, index) =>  
                <li key={index}> 
                    <span className={styles.text}>{task}</span> 
                    <button className={styles.delButton} onClick={() => deleteTask(index)}>Delete</button>
                    <button className={styles.moveButton} onClick={() => moveTaskUp(index)}>🔼</button>
                    <button className={styles.moveButton} onClick={() => moveTaskDown(index)}>🔽</button>
                </li>)}
        </ol>
    </div>);
}

export default toDoList