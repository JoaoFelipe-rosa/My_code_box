import React, { useState } from 'react';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task: Task = {
        id: tasks.length + 1,
        name: newTask,
        completed: false
      };

      setTasks(prevTasks => [...prevTasks, task]);
      setNewTask('');
    }
  };

  const handleToggleTask = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-md shadow items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">To do List</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          className="flex-1 py-2 px-3 rounded-l-lg border-2 focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none "
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map(task => (
            <li
              key={task.id}
              className={`flex items-center px-4 py-2 rounded-md ${
                task.completed ? 'bg-green-100' : 'bg-white'
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
                className="mr-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <span
                className={`flex-1 ${
                  task.completed ? 'line-through' : ''
                } font-medium`}
              >
                {task.name}
              </span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
