
import { useState } from 'react';

export default function TaskItem({ task, onDelete, onUpdate }) {
  const [timeSpent, setTimeSpent] = useState(task.timeSpent || 0);
  const [timerRunning, setTimerRunning] = useState(false);
  const handleDelete = () => onDelete(task.id);
  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      task.timerInterval = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
        onUpdate({ ...task, timeSpent: timeSpent + 1 });
      }, 1000); 
    }
  };

  const stopTimer = () => {
    setTimerRunning(false);
    clearInterval(task.timerInterval);
  };


  const resetTimer = () => {
    setTimeSpent(0);
    onUpdate({ ...task, timeSpent: 0 });
    clearInterval(task.timerInterval);
    setTimerRunning(false);
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>Assignee: {task.assignee}</p>
      <p>Time Spent: {timeSpent}s</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={startTimer} disabled={timerRunning}>Start Timer</button>
      <button onClick={stopTimer} disabled={!timerRunning}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}
