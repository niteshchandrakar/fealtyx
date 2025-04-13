import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TimeTracker from "./TimeTracker";
import styles from "./TaksList.module.css";

export default function TaskList({ tasks, onDeleteTask, onUpdateTask }) {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => setEditingTask(task);
  const handleCancelEdit = () => setEditingTask(null);
  const handleSaveEdit = (updatedTask) => {
    onUpdateTask(updatedTask);
    setEditingTask(null);
  };

  return (
    <div className={styles.taskList}>
      {editingTask ? (
        <TaskForm
          task={editingTask}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        tasks?.map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <h4 className={styles.taskTitle}>{task.title}</h4>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Assignee: {task.assignee}</p>
            <p>
              Created At:{" "}
              {task.createdAt
                ? new Date(task.createdAt).toLocaleDateString()
                : "No Date Available"}
            </p>

            <TimeTracker task={task} />

            <div className={styles.buttonGroup}>
              <button
                onClick={() => handleEdit(task)}
                className={styles.editBtn}
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
