import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todo({todo ,onUpdate ,onDelete}) {
    const {id,text} =todo;
    let checkHandle=(e)=> onUpdate({...todo, status:!e.target.checked ? "active":"completed"});
    let deleteHandle = (e)=> onDelete(todo);
    return (
        <li>
            <input id={"checkBox"+id} type="checkbox" onClick={checkHandle}/>
            <label htmlFor={"checkBox"+id}>{text}</label>
            <button onClick={deleteHandle}><FaRegTrashAlt /></button>
        </li>
    );
}

