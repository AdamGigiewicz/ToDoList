import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/ToDoList';

function App() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = formatDate(date);
      setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return date.toLocaleString(undefined, options);
  };

  return (
    <div className='todo-app'>
      <h3 className='current-date'>Aktualna data i godzina: {currentDate}</h3>
      <TodoList />
    </div>
  );
}

export default App;
