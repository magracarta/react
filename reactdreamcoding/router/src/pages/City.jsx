import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function City() {
  let [text, setText]= useState("");
  let handleChange = (e)=> setText(e.target.value);
  const navigate = useNavigate();
  let handleSubmit=(e)=>{
    e.preventDefault();
    setText('');
    navigate(`/go/city/${text}`)
  }
  return (
    <div>
      go 안에 시티에요
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='city id' value={text} onChange={handleChange}></input>
      </form>
    </div>
  )
}

export default City
