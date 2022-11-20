import React, {memo, useCallback, useMemo, useReducer} from "react";
import personReducer from "./reducer/preson-reducer";

export default function AppMentor(props) {
    // const [person, setPerson] = useState(initialPerson);
    const [person , dispatch] = useReducer(personReducer, initialPerson);
    
    const handleUpdate = useCallback(()=>{
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({type:'updated', prev , current});
    },[]);
    const handleAdd =useCallback(()=>{
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);

        dispatch({type:'added', name , title});
    },[]);
    const handleRemove = useCallback(()=>{
        const name = prompt(`누구를 삭제 하고 싶은가요?`);

        dispatch({type:'deleted', name });
    },[]);
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>            
            <p>{person.name}의 멘토는</p>
            <ul>
                {person.mentors.map((mentor, index)=>(
                    <li key = {index}>
                        {mentor.name} ({mentor.title})
                    </li>   
                ))}
            </ul>
            <Button onClick={handleUpdate} text='멘토이름 바꾸기' />
            <Button onClick={handleAdd} text='멘토 추가' />
            <Button onClick={handleRemove} text='멘토 삭제하기' />

            
        </div>
    );
}

//use memo => 동일한 값이면 리 랜더링을 하지 말라 메모를 해줘야한다.
const Button= memo(({ text, onClick})=>{
    console.log('Button', text, 're-redering 😃');
    const result = useMemo(()=> calculateSomething(), []);
    return(
        <button
            onClick={onClick}
            style={{
                backgroundColor : '#000',
                color:'#fff',
                borderRadius:'20px',
                margin:'0.4rem',
                cursor:'pointer',
            }}
        >{`${text} ${result}`}</button>
    )
});
function calculateSomething(){
    for(let i =0; i<10000; i++){
        console.log('😃');
    }
    return 10;
}

const initialPerson = {
    name:'엘리',
    title:'개발자',
    mentors:[
        {
            name:'밥',
            title:'시니어개발자',
        },{
            name:'제임스',
            title:'시니어개발자',
        },
    ]
}
