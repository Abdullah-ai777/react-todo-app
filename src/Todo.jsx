import { v4 as uuidv4 } from 'uuid';
   import { useState } from "react";
import "./todo.css";


  export default function Todo(){

    let [memory,setmemory]=useState([]);
    let [task,settask]=useState("");
    let [error,seterror]=useState("");
   

    function hello(){

       

        if(task.trim() !== "" && task.length <= 10 && !memory.some((e)=> e.text ===task)){
            setmemory([...memory,{id:uuidv4(),text:task}])
            
            settask("");
            seterror("")
        }else if(task.length > 10){
            seterror("your task is to big!")
        }else if(task.trim() ==""){
            seterror("your task is empty!")
        }else if(memory.some((e)=> e.text === task)){
            seterror("your task alrady include!")
        }


    } 
    function taskDelete(id){
        setmemory(memory.filter((taskd)=> taskd.id !== id));
    }


    return(
        <>
         <div className="todo-container">

    <h1 className="todo-title">My To-Do List</h1>

    <h3 style={{backgroundColor:"red"}}>{error}</h3>

    <div className="todo-input-container">

      <input type="text" id="todo-input" placeholder="Add a new task..."  value={task} onChange={(e)=>settask(e.target.value)} />

      <button id="add-btn" onClick={hello}>Add</button>

    </div>

    <ul id="todo-list">

     {memory.map((e,k) => <li key={k}>{e.text} {console.log(e.id)}<button className="remove-btn" onClick={()=> taskDelete(e.id)}>Delete</button></li> )}

    </ul>
        
  </div>

        </>
    )
}