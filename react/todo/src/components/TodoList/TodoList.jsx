import React , {useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";


export default function TodoList(){
    const [todos, setTodos] = useState([
        {id : '123', text:'장보기', statu :'active' },
        {id : '124', text:'공부하기', statu :'active' },
    ]);
    
    const handleAdd = (todo)=> setTodos([...todos, todo]);
    const handleUpdate = (updated)=> 
        setTodos(todos.map((t)=>( t.id === updated.id ? updated : t))
        );
    const handleDelte = (deleted)=> 
        setTodos(todos.filter((t)=> t.id !== deleted.id)
    );
   
    return(
        <section>
            <ul>
                {
                    todos.map((item,i)=>{
                      return <Todo key = {item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelte} index={i} />  
                    })
                }
            </ul>
            
            <AddTodo onAdd = {handleAdd}/>
        </section>
    )
}