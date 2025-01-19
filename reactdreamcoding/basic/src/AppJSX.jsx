import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = "만두";
  const list = ["우유","딸기","바나나"];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <p>name</p>
      <p>{name}</p>
      <h1 style={{width:"500px", color:"#999"}}>Hello</h1>
      {
        list.map((item)=> <li>{item}</li>)
      }
    </>
  );
}

export default AppJSX;
