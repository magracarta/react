import React, { useReducer, useState } from 'react';
import personReducer from './reducer/Person-reducer';


export default function AppMentor() {
//   const [person, setPerson] = useState(initialPerson);
  const[person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate =()=>{
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({type:'updated', prev, current});
  }
  const handleAdd = ()=>{
    const addMentor = prompt(`추가할 멘토의 이름을 작성해주세요.`);
    const addTitle = prompt("멘토의 역할은 무엇인가요?");
    dispatch({type:"added", addMentor, addTitle});
  }
  const handleRemove = ()=>{
    const removeMentor = prompt("삭제할 멘토의 이름을 작성해주세요.");
    dispatch({type:"deleted", removeMentor})
  }

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleUpdate}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleRemove}>멘토 삭제하기</button>
    </div>
  );
}
let initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  }