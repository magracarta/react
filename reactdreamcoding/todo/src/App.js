import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import {FilterProvider , FilterContext} from './components/Context/FilterProvider';
import Header from './components/Header/Header';
import { DarkModeProvider } from './components/Context/DarkModeContext';

function App() {
  

  return (
    <DarkModeProvider>
      <FilterProvider>
        <Header />
        <TodoList />
      </FilterProvider>
    </DarkModeProvider>
  );
}

export default App;
