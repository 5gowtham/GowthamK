import React from 'react';
import Todo from './components/Todo';
import './App.css';


function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='React'/>
      <Todo text='Node'/>
      <Todo text='Angular'/>
   
      </div>
  );
}

export default App;
