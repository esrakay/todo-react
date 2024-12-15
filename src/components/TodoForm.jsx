import { useState } from "react";

export default function TodoForm({addTask}) {
    const [task, setTask] = useState(""); 

    const handleInputChange = (evt) => {
        setTask(evt.target.value); 
    }

    const updateTodoList = (evt) => {
        evt.preventDefault(); 
        setTask(""); 
        addTask(task); 
    }

    return (
        <form action="/" onSubmit={(updateTodoList)} className="TodoForm">
            <input type="text" name="text" value={task} placeholder="New task" onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}