import { useState } from "react";

export default function TaskForm({onAdd}) {
  const [taskName, setTaskName] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button className="form-button">+</button>
      <input type="text"
             value={taskName}
             onChange={e => setTaskName(e.target.value)}
             placeholder="your next task..."/>
    </form>
  );
}