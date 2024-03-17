import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import s from './TodoList.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';


const TodoList = ({todo, setTodo}) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState('');
  const deleteTodo = (id) => {
    setTodo([...todo].filter(item => item.id!=id))
  }
  const statusTodo = (id) => {
    setTodo([...todo].filter(item => {
        if(item.id == id) item.status = !item.status;
        return item;
    }))
  }
  const editTodo = (id, title) => {
    setEdit(id);
    setEditText(title);
  }
  const saveTodo = (id) => {
    if(editText.length < 1) return alert('Text must have more than 0 symbols')
    setTodo([...todo].filter(item=> {
        if(item.id == id){
            item.title = editText;
        }
        return item;
    }));
    setEditText('');
    setEdit(null);
  }
  return (
    <div>
        {
            todo.map( item => (
                <div key={item.id} className={s.listItems}>
                    {
                        edit == item.id?
                        <div>
                            <TextField onChange={(e) => setEditText(e.target.value)} value={editText} label='Type your todo' />
                        </div> 
                        :
                        <div className={!item.status ? (s.close) : ''}>{item.title}</div>
                    }
                    {
                        edit == item.id?
                        <div>
                            <Button onClick={() => saveTodo(item.id)}>Save</Button>
                        </div> :
                        <div>
                            <Button onClick={() => deleteTodo(item.id)}><DeleteIcon /></Button>
                            <Button onClick={() => statusTodo(item.id)} className={s.btn}>{item.status ? (<DoneIcon />) : (<CloseIcon />)}</Button>
                            <Button onClick={() => editTodo(item.id, item.title)}><EditIcon /></Button>
                        </div>
                    }
                </div>
            ))
        }
    </div>
  )
}

export default TodoList