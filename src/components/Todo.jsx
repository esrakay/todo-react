import { TodoClass } from "../models/Todo"; 
import {v4 as uuid} from 'uuid'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import "../styles/Todo.css"

export default function Todo() {
    const [todoList, setTodoList] = useState([new TodoClass(uuid(), "Learn React", false), new TodoClass(uuid(), "Do science homework", false)]); 
    const itemsPerPage = 3; 
    const [currentPage, setCurrentPage] = useState(1); 
    const [currentList, setCurrentList] = useState(todoList.slice(0, itemsPerPage)); 

    useEffect(() => {
        const startIndex = itemsPerPage * (currentPage - 1); 
        const endIndex = startIndex + itemsPerPage; 

        setCurrentList(() => {
            return todoList.slice(startIndex, endIndex); 
        })
    }, [todoList, currentPage]); 

    const addTask = (task) => {
        if (task.trim() !== '') {
            const newTodo = new TodoClass(uuid(), task, false); 
            setTodoList((todoList) => {
                const updatedTodoList = [...todoList, newTodo]; 
                const lastPage = Math.ceil(updatedTodoList.length / itemsPerPage); 
                setCurrentPage(lastPage); 
                return updatedTodoList; 
            })
        }
    }

    const toggleTodoChecked = (id) => {
        setTodoList((todoList) => {
            return todoList.map((todo) => todo.id === id ? new TodoClass(todo.id, todo.task, !todo.checked) : todo); 
        })
    }
    
    const prevList = () => {
        setCurrentPage((currentPage) => Math.max(1, currentPage - 1)); 
    }
    
    const nextList = () => {
        setCurrentPage((currentPage) => Math.min(Math.ceil(todoList.length / itemsPerPage), currentPage + 1)); 
    }
    
    return (
        <div className="Todo">
            <h1>Todo-List</h1>
            <TodoForm addTask={addTask}/>
            <TodoList todoList={currentList} toggleTodoChecked={toggleTodoChecked}/>
            <div className="pagination">
                <button className="pagination__button pagination__button-prev" onClick={prevList}>&lt;&lt;</button>
                <button className="pagination__button pagination__button-next" onClick={nextList}>&gt;&gt;</button>
            </div>
            <div className="page">
                <p>{currentPage}</p>
            </div>
        </div>
    )
}   
