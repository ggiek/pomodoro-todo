import './App.css';
import { useState, useEffect } from "react";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import SettingsContext from "./contexts/SettingsContext";
import TaskForm from "./components/TaskForm/TaskForm";
import Task from "./components/Task/Task";

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name,done:false}];
    });
  }

  function removeTask(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject,index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = numberComplete/numberTotal * 100;
    if (percentage === 0) {
      return 'Try to do at least one! 🙏';
    }
    if (percentage === 100) {
      return 'Nice job for today! 🏝';
    }
    return 'Keep it going 💪🏻';
  }

  function renameTask(index,newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }

  return (
    <div>
      <div>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? 
          <div className='main'> 
            <Settings />
          </div> 
          : 
          <div className='app'>
            <Timer />
            <div>
              <h1>{numberComplete}/{numberTotal} Complete</h1>
              <h2>{getMessage()}</h2>
              <TaskForm onAdd={addTask} />
              {tasks.map((task, index) => (
                <Task {...task}
                  onRename={newName => renameTask(index, newName)}
                  onTrash={() => removeTask(index)}
                  onToggle={done => updateTaskDone(index, done)} />
              ))}
            </div>
          </div>
        }
        </SettingsContext.Provider>
      </div>
    </div>
  );
}
