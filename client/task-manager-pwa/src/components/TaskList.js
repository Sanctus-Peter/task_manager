import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:8000/api/tasks/')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  };

  const handleUpdate = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    setSelectedTask(task);
    setUpdateTitle(task.title);
    setUpdateDescription(task.description);
  };

  const handleDelete = (taskId) => {
    console.log('Delete Task ID:', taskId);
    axios.delete(`http://localhost:8000/api/tasks/${taskId}/delete`)
      .then(response => {
        console.log(`Task ${taskId} deleted successfully.`);
        fetchTasks(); // Refresh the task list
      })
      .catch(error => console.error(error));
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:8000/api/tasks/${selectedTask.id}/update`, {
      title: updateTitle,
      description: updateDescription,
    })
      .then(response => {
        console.log(response.data); // Updated task object
        setSelectedTask(null);
        setUpdateTitle('');
        setUpdateDescription('');
        fetchTasks(); // Refresh the task list
      })
      .catch(error => console.error(error));
  };
  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <h1>Task Lists</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>Title: {task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <p>Created At: {formatDateString(task.created_at)}</p>
            <p>Updated At: {formatDateString(task.updated_at)}</p>
            <button onClick={() => handleUpdate(task.id)}>Update</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedTask && (
        <div>
          <h2>Update Task</h2>
          <form onSubmit={handleUpdateSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={updateTitle}
              onChange={e => setUpdateTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={updateDescription}
              onChange={e => setUpdateDescription(e.target.value)}
            />
            <button type="submit">Update Task</button>
          </form>
        </div>
      )}
    </div>
  );
};
