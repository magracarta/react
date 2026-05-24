import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) =>{
    const data = useContext(DiaryStateContext);
    const [currentDiaryItme,setCurrentDiaryItme ] = useState();
    const nav = useNavigate();

 
    useEffect(()=>{
        const currentDiaryItem = data.find((item)=> String(item.id) === String(id));

       if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/",{replace:true});
       }
       setCurrentDiaryItme(currentDiaryItem);
    },[id]);

    return currentDiaryItme;
}

export default useDiary;