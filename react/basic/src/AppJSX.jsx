import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = 'minju';
  const list = ['우유','바나나','딸기','요거트'];
  return (
    <>
      <h1 className='orange'>{`hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => (<li>{item}</li>))
        }
      </ul>
      <img 
      style ={{ width: '200px' , height:'200px' }}
      src='https://images.unsplash.com/photo-1659535979248-bf5954d21328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' 
      alt='card' 
      />
    </>
  );
}

export default AppJSX;

// 리엑트 컴포넌트는 함수로 App이라는 대문자를 사용
// 리턴할때는 jsx문법을 사용

// 1. 태그안에 작성해야한다. (<> or <div>)
// 2. className 으로 작성해야한다.
// 3. 자바스크립트 코드 작성 가능하다. 자바스크립트 작성하려면 중괄호를 사용해야한다.

