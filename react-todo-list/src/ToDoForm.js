import { useState } from 'react';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }
  
  function handleChange(e) {
    setUserInput(e.currentTarget.value);
  }
  
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleSubmit(e); 
    }
  }
  
  return (
    <form onSubmit={handleSubmit}> 
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Input task to do"
      />
      <button>Save</button>
    </form>
  )
}

export default ToDoForm;