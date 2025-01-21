import React, { useState } from 'react';
import { useImmer } from 'use-immer';

export default function AppForm() {
  const [form, upDateForm] = useImmer({name:"", email:""});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange=(e)=>{
    const {name, value} = e.target;
    // setForm({...form, [name]:value});
    upDateForm(data=>{data[name]=value});
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
