import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/task');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async () => {
    if (newTask.trim() === '') return;
    try {
      const response = await axios.post('http://localhost:5000/api/task', { title: newTask, isComplete: false });
      setTasks([...tasks, response.data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/task/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleTaskCompletion = async (task) => {
    try {
      if (task.isComplete) {
        await deleteTask(task.id);
      } else {
        const updatedTask = { ...task, isComplete: true };
        await axios.put(`http://localhost:5000/api/task/${task.id}`, updatedTask);
        setTasks(tasks.map(t => (t.id === task.id ? updatedTask : t)));
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} onToggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App;
