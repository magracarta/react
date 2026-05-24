import { createContext, useReducer, useRef, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import { Link, Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit'

const mockData = [
  {
    id:1,
    createDate: new Date("2026-05-24").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
    {
    id:2,
    createDate: new Date("2026-05-23").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
    {
    id:3,
    createDate: new Date("2026-01-23").getTime(),
    emotionId: 3,
    content: "2번 일기 내용",
  }
]
function reducer(state, action){
  switch(action.type){
    case  "CREATE": 
      return [action.data,...state];
    case  "UPDATE": 
      return state.map((item)=> 
        String(item.id) === String(action.data.id)? action.data:item);
    case  "DELETE": 
      return state.filter((item)=> 
        String(item.id) !== String(action.data.id));
    default : return state;
  }
  return state;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(4);

  //새로운 일기 추가
  const onCreate= (createDate, emotionId, content)=>{
    dispatch({
      type:"CREATE",
      data:{
        id : idRef.current++,
        createDate,
        emotionId,
        content
      }
    });
  }
  //기존 일기 수정
  const onUpdate = (id,createDate, emotionId, content)=>{
    dispatch({
       type:"UPDATE",
        data:{
          id,
          createDate,
          emotionId,
          content
      }
    })
  }


  //기존일기 삭제
  const onDelete =(id)=>{
    dispatch({
      type : "DELETE",
      data:{
        id
      }
    });
  }

  return (
    <>
    <DiaryStateContext.Provider value={data} >
      <DiaryDispatchContext.Provider value ={{
        onCreate, onUpdate, onDelete
      }}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/diary/:id' element={<Diary/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
  )
}

export default App
