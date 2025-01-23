import React, { useEffect, useRef } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import styles from './Todo.module.css'

export default function Todo({todo ,onUpdate ,onDelete}) {
    const {id,text, status} =todo;
    let checkHandle=(e)=> onUpdate({...todo, status:!e.target.checked ? "active":"completed"});
    let deleteHandle = (e)=> onDelete(todo);
    let tag = useRef(null);

    useEffect(()=>{
        if(status == "completed") tag.current.checked = true;
    },[status]);
    
    return (
        <li className={styles.todo}>
            <input className={styles.checkbox} id={"checkBox"+id} type="checkbox" onClick={checkHandle} ref={tag}/>
            <label className={styles.text} htmlFor={"checkBox"+id}>{text}</label>
            <span className={styles.icon}>
               <button className={styles.button} onClick={deleteHandle}><FaRegTrashAlt /></button>
            </span>
        </li>
    );
}

