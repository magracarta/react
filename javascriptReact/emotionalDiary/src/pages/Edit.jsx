import { replace, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Editor from "../components/Editor";
import useDiary from "../hooks/useDiary";

const Edit = ()=>{
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
   
    const curDiaryItem = useDiary(params.id);

    const onClickDelete =()=>{
        if(!window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!"))return;
        onDelete(params.id);
        nav(-1,{ replace:true});
    }

    const onSubmit = (input)=>{
        if(!window.confirm("일기를 정말 수정할까요?"))return;
        onUpdate(input.id,input.createDate.getTime(), input.emotionId, input.content);
        nav(-1,{ replace:true});
    }

    return(
        <>
            <div>
                <Header
                title={"일기 수정하기"}
                leftChild={<Button 
                    text={"< 뒤로하기"}
                    onClick={()=>{
                        nav(-1);
                    }}
                />}
                rightChild={<Button text={"삭제하기"} type={"NEGATIVE"}
                    onClick={onClickDelete}
                />}
                />
                <Editor
                    initData={curDiaryItem}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    )
}

export default  Edit;