import React, { useContext, useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { FilterContext, updateDotos } from '../Context/FilterProvider';
import styles from './TodoList.module.css'

export default function TodoList() {
    const [todos, setTodos] = useState(()=> readTodostFromLocalStroage());
    const {filter} = useContext(FilterContext);
    const handleAdd = (todo)=>{ 
        if(todos.findIndex(i => i.text == todo.text) >= 0) return alert("이미 있는 내용입니다!!");
        setTodos(prev =>{return  [...prev, todo]}); 
    }
    const handleUpdate = (updated)=>{ setTodos(todos.map(t => t.id === updated.id ? updated : t )); }
    const handleDelete = (delted)=>{ setTodos(prev => prev.filter(t => t.id !== delted.id)); }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);
    
    return (
       <section className={styles.container}>
            <ul className={styles.list}>
                {todos.map(item => (filter=="all"? item.status :item.status == filter)&&<Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />)}
            </ul>
            <AddTodo onAdd={handleAdd} />
       </section>
    );
}

let readTodostFromLocalStroage =()=>{
    console.log('readTodostFromLocalStroage');
    const todos = localStorage.getItem('todos');
   return todos? JSON.parse(todos) : [];
}

