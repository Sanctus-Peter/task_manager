import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TaskDetail = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3000/api/tasks/${taskId}/`)
      .then(response => setTask(response.data))
      .catch(error => setError('Task not found.'));
  }, [taskId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.Status}</p>
      <p>Created At: {task.created_at}</p>
      <p>Updated At: {task.updated_at}</p>
    </div>
  );
};

export default TaskDetail;
