import { useState, useRef, useContext } from "react";
import "./Editor.css"
import { TodoDispatchContext } from "../App";

const Editor = ()=>{
    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }
    const onKeyDown=(e)=>{
        if(e.keyCode === 13){
            onsubmit();
        }
    }

    const onsubmit =()=>{
        if(content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    return (
        <div className="Editor">
            <input 
             ref={contentRef}
             onKeyDown={onKeyDown}
            value={content} onChange={onChangeContent} placeholder="새로운 Todos...."/>
            <button onClick={onsubmit}>추가</button>
        </div>
    )
}

export default Editor;