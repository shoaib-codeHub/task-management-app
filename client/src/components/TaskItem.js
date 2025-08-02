
// File: src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text text-muted">{task.description}</p>
          <span className={`badge bg-${
            task.status === 'Completed'
              ? 'success'
              : task.status === 'In Progress'
              ? 'warning'
              : 'secondary'
          }`}>{task.status}</span>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(task)}>Edit</button>
          <button className="btn btn-sm btn-outline-danger me-2" onClick={() => onDelete(task.id)}>Delete</button>
          {task.status !== 'Completed' && (
            <button className="btn btn-sm btn-outline-success" onClick={() => onToggleStatus(task.id)}>Mark as Complete</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;