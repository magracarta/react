import { useEffect, useState } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";
import { emtionList } from "../util/constans";
import { getStringedDate } from "../util/getStringed";



const Editor = ({initData,onSubmit})=>{
    const nav = useNavigate();
    const [input, setInput] = useState({
        createDate: new Date(),
        emotionId:3,
        content:"",
    });
    useEffect(()=>{
        if(initData){
            setInput({
                ...initData,
                createDate : new Date(Number(initData.createDate)),
            });
        }
    },[initData]);
0
    const onChangeInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        if(name === "createDate"){
            value = new Date(value);
        }
        setInput((prev)=>{
            return {...prev,[name]: value}
        });
    }
    const onClickSubmitButton =()=> {
        onSubmit(input);
    }

    return (
        <div className="Editor">
            <section className="data_section">
                <h4>오늘의 날짜</h4>
                <input
                name="createDate"
                onChange={onChangeInput}
                 value={getStringedDate(input.createDate)} 
                type="date"/>
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emtionList.map((item)=>
                        <EmotionItem 
                        onClick = {()=>{
                            onChangeInput({
                              target:{
                                name : "emotionId",
                                value : item.emotionId                              }  
                            });
                        }}
                            key = {item.emotionId}
                            {...item}
                            isSelected = {item.emotionId === input.emotionId}
                            />
                    )}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea 
                    name ="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="오늘은 어땠나요?"
                />
            </section>
            <section className="button_section">
                    <Button text={"취소하기"}
                        onClick={()=>{nav(-1)}}
                    />
                    <Button text={"작성완료"} 
                    type={"POSITIVE"}
                    onClick={onClickSubmitButton}
                    />
            </section>
        </div>
    )
}

export default Editor;