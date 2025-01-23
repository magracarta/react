import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import {FilterProvider , FilterContext} from './components/Header/FilterProvider';
import Header from './components/Header/Header';

function App() {
  

  return (
    <FilterProvider>
      <Header />
      <TodoList />
    </FilterProvider>
  );
}

export default App;
