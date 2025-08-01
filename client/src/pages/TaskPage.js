import React, { useEffect } from 'react';
import API from '../services/taskService';

function TaskPage() {
  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await API.get('/tasks');
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTasks();
  }, []);

  return <h2>Task Page (Dashboard)</h2>;
}

export default TaskPage;
