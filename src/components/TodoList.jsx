import TodoItem from "./TodoItem"
import "../styles/TodoList.css"

export default function TodoList({todoList = [], toggleTodoChecked}) {
    return (
        <div className="TodoList">
            {todoList.map((todo) => {
                return <div key={todo.id} style={{textDecoration: todo.checked ? "line-through": "none"}}>
                    <TodoItem todo={todo} toggleTodoChecked={toggleTodoChecked}/>
                </div>
            })}
        </div>
    )
}