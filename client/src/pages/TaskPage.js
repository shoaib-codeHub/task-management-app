// File: src/pages/TaskPage.js
import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import Navbar from '../components/Navbar';

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish React project',
      description: 'Complete UI and connect with backend',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Team meeting',
      description: 'Weekly sync with product team',
      status: 'Completed',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAdd = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const handleSave = (task) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editingTask.id ? task : t))
      );
    } else {
      setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleToggleStatus = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' }
          : t
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Tasks</h2>
          <button className="btn btn-success" onClick={handleAdd}>
            Add Task
          </button>
        </div>
        <div className="row">
          {tasks.map((task) => (
            <div key={task.id} className="col-md-4 mb-3">
              <TaskItem
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleStatus={handleToggleStatus}
              />
            </div>
          ))}
        </div>

        {showForm && (
          <TaskForm
            onSave={handleSave}
            onClose={() => setShowForm(false)}
            initialTask={editingTask}
          />
        )}
      </div>
    </>
  );
};

export default TaskPage;
