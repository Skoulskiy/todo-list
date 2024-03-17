import React, { useState } from 'react'
import {Button, TextField} from "@mui/material"
import s from "./TodoAdd.module.css";
import { v4 as uuidv4 } from 'uuid';

const TodoAdd = ({setTodo, todo}) => {
  const [todoText, setTodoText] = useState('');
  console.log(todoText);
  const saveTodo = (e) => {
    if(todoText.length < 1) return alert('Text must have lenght more than 0!');
    e.preventDefault();
    setTodo([...todo, {
        id: uuidv4(),
        title: todoText,
        status: true
    }]);
    setTodoText('');
  }
  console.log(todo)
  return (
    <div>
        <form className={s.form}>
            <TextField fullWidth value={todoText} onChange={(e) => setTodoText(e.target.value)} label="Type your todo" variant='outlined'/>
            <Button onClick={(e) => saveTodo(e)} variant='outlined'>Save</Button>
        </form>
    </div>
  )
}

export default TodoAdd