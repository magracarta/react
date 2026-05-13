
import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({id, isDone, content, date,onUpdate,onDelete})=>{
    const onChageCheckBox = ()=>{
        onUpdate(id);
    }
    const onClickDelete=()=>{
        onDelete(id);
    }
    return (
        <div className="TodoItem">
            <input checked={isDone} type="checkbox" onChange={onChageCheckBox}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button
                onClick={onClickDelete}
            >삭제</button>
        </div>
    )
}

//고차 컴포넌트  (HOC)
// export default memo(TodoItem,(prevProps, nextProps)=>{
//     // 반환 값에 따라 Props가 바뀌었는제, 안바귀었는 지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O

//     if(prevProps.id !== nextProps.id){
//         return false;
//     }
//     if(prevProps.isDone !== nextProps.isDone){
//         return false;
//     }
//     if(prevProps.content !== nextProps.content){
//         return false;
//     }
//     if(prevProps.date !== nextProps.date){
//         return false;
//     }
//     return true;
// });

export default memo(TodoItem);