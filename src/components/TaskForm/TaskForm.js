import "./TaskForm.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function TaskForm({onAdd}) {
  const [taskName, setTaskName] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <button className="form-button"><FaPlus /></button>
      <input type="text"
             value={taskName}
             onChange={e => setTaskName(e.target.value)}
             placeholder="your next task..."/>
    </form>
  );
}