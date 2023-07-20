import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <nav>
          <ul>
              <li>
                  <Link to="/tasks/create">Create Task</Link>
              </li>
              <li>
                  <Link to="/list">List Tasks</Link>
              </li>
          </ul>
      </nav>
    </div>
  );
};

export default Home;
