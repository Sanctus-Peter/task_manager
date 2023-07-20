import React, { useState } from 'react';
import axios from 'axios';

const TaskCreate = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8000/api/tasks/', { title: title, description: description })
      .then(response => {
        console.log(response.data); // Newly created task object
        setTitle('');
        setDescription('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskCreate;
