import React, { useState } from 'react';
import Add from './Add';
import List from './List';


const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Add todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </>
  )
};

export default Todo;