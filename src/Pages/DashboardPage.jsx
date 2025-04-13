import { useState } from "react";
import TaskList from "../Components/Dashboard/TaskList";
import TaskForm from "../Components/Dashboard/TaskForm";

import "./Dashboard.css";

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "First Task",
      description: "this is first task with high priority",
      priority: "High",
      status: "Completed",
      assignee: "nitesh",
      createdAt: new Date(),
      timeSpent: 0,
    },
  ]);
  const [priority, setPriority] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("Newest");

  const handleAddTask = (task) => {
    setTasks([
      ...tasks,
      {
        ...task,
        id: tasks.length + 1,
        timeSpent: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date(),
      },
    ]);
    alert("Task added successfully!");
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    alert("Task deleted successfully!");
  };

  const handleUpdateTask = (task) => {
    task.createdAt = new Date().toISOString();
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    alert("Task updated successfully!");
  };

  const filtered = tasks
    .filter((task) => priority === "All" || task.priority === priority)
    .filter((task) => status === "All" || task.status === status)
    .sort((a, b) =>
      sort === "Newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  return (
    <>
      <h2 className="dashboard-title">Task Manager</h2>
      <div className="dashboard">
        <section className="sidebar">
          <div className="task-creator">
            <TaskForm onAddTask={handleAddTask} />
          </div>

          <div className="filters">
            <label>
              Priority:
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>
            <label>
              Status:
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>All</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </label>
            <label>
              Sort:
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </label>
          </div>

          <div className="task-section">
            <h3>Tasks</h3>
            {filtered.map((task) => (
              <TaskList
                key={task.id}
                tasks={[task]}
                onDeleteTask={handleDeleteTask}
                onUpdateTask={handleUpdateTask}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
