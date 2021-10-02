import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState([]);

  function addTask(userInput) {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(25),
        taskText: userInput,
        completed: false,
      }
      setTodos([...todos, newTask])
    }
  }

  function removeTask(id) {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  function handleToggle(id) {
    setTodos([
      ...todos.map((todo) => 
      (todo.id === id) ?
        {...todo, completed: !todo.completed}
        :
        {...todo}
    )])
  }

  return (
    <div className="App">
      <header>
        <h1>List of tasks: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo 
            key={todo.id}
            todo={todo}
            removeTask={removeTask}
            toggleTask={handleToggle}
          />
        )
      })}
    </div>
  );
}

export default App;
