import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({onAdd}){
    const [text, setText] =useState('');
    
    const inputChage = (e)=>{
        setText(e.target.value);
    }
    const inputSubmit = (e)=>{
        e.preventDefault();
        if(text.trim() === '')return false;
        
        onAdd({id :uuidv4() ,text , statu:'active'});
        setText('');
        
    }
    return(
        <>
            <form onSubmit={inputSubmit}>
                <input 
                    type = 'text'
                    name = 'text'
                    value={text}
                    onChange={inputChage}
                >
                </input>
                <button>Add</button>
            </form>
        </>
    )
}