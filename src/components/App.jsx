import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import ShowDoneToggle from './ShowToggleDone';

const App = ()=>(
  <div>
    <h1>First Application</h1>
    <TodoList />
    <TodoInput />
    <ShowDoneToggle />
  </div>
);

export default App;
