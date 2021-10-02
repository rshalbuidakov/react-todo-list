function ToDo({ todo, toggleTask, removeTask }) {
  return (
    <div key={todo.id} className="item-todo">
      <div 
        className={todo.completed ? "task-text strike" : "task-text"}
        onClick={() => toggleTask(todo.id)}
        >
        {todo.taskText}
      </div>
      <div>
        <button className="delete-task" onClick={() => removeTask(todo.id)}>X</button>
      </div>
    </div>
  )
}

export default ToDo;