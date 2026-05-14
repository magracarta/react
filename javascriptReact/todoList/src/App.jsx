import './App.css'
import Editor from './components/Editor'
import List from './components/List'
import Header from './components/Header'
import { useReducer, useRef, useState, useCallback, createContext, useMemo } from 'react'

const mockData =[
  {
    id : 0,
    isDone:false,
    content : "React 공부하기",
    date : new Date().getTime(),
  }, {
    id : 1,
    isDone:false,
    content : "빨래하기",
    date : new Date().getTime(),
  }, {
    id : 2,
    isDone:false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  }
];

function reducer(state,action){
  switch(action.type){
    case  'CREATE':
      return [action.data,...state];
    case  'UPDATE':
      return state.map(
        (item)=>item.id === action.targetId
      ?{...item,isDone: !item.isDone} 
      : item 
    );
    case  'DELETE':
      return state.filter((item)=> item.id !== action.targetId );
      default:
          return state;
  }
  
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  },[]);

  const onCreate = useCallback((content)=>{
    dispatch({
        type : "CREATE",
        data:{
           id:idRef.current++,
            isDone : false,
            content : content,
            date : new Date().getTime()
        }
    });
    
  },[]);
  const onDelete = useCallback((targetId)=>{
    dispatch({
      type:"DELETE",
      targetId : targetId
    })
  },[]);

  const meoizationPatch = useMemo(()=>{
    return {onCreate,onDelete,onUpdate}
  },[]);

  return (
    <div className='App'>
       <Header/>
      <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={meoizationPatch}>
            <Editor/>
            <List/>
          </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
