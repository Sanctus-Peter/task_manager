import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import TaskCreate from './components/TaskCreate';
import Home from './components/Home';
import './styles/App.css'

export default function App() {
  return (
    <Router>
        <div className="App">
            <Home />
            <Routes>
                <Route path="/list" element={<TaskList />} />
                <Route path="/tasks/create" element={<TaskCreate />} />
                <Route path="/tasks/:taskId" element={<TaskDetail />} />
            </Routes>
        </div>
    </Router>
  );
};