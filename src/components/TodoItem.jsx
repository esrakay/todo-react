export default function TodoItem({todo, toggleTodoChecked}) {
    return (
        <div className="TodoItem">
            <label htmlFor={"item-"+ todo.id}>{todo.task}</label>
            <input type="checkbox" id={"item-" + todo.id} defaultChecked={todo.checked} onClick={() => {toggleTodoChecked(todo.id)}}/>
        </div>
    )
}