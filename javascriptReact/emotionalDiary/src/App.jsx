import { createContext, useEffect, useReducer, useRef, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import { Link, Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit'


function reducer(state, action){
  let nextState;
  switch(action.type){
    case  "INIT": 
      {
        nextState = action.data;
        break;
      } 
    case  "CREATE": 
      {
        nextState = [action.data,...state];
        break;
      } 
    case  "UPDATE": 
    {
      nextState =state.map((item)=> 
        String(item.id) === String(action.data.id)? action.data:item);
      break;
    }
    case  "DELETE": 
      {
        nextState = state.filter((item)=> 
        String(item.id) !== String(action.data.id));
        break;
      }
    default : return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer,[]);
  const idRef = useRef(1);

  useEffect(()=>{
    const storedData  = localStorage.getItem("diary");
    if(!storedData){
      setIsLoading(false);
      return;
    }
    const parseData = JSON.parse(storedData);
    let maxId = 0;
    if(!Array.isArray(parseData)){
      setIsLoading(false);
      return;
    }
    parseData.forEach((item)=>{
      if(Number(item.id) > maxId ){
        maxId = Number(item.id);
      }
    });
    idRef.current = maxId+1;
    
    dispatch({
      type:"INIT",
      data:parseData
    })

    setIsLoading(false);
  },[]);
  


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
  
  if(isLoading){
    return <div> 로딩중입니다.....</div>
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
