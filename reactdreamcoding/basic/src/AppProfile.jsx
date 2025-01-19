import './App.css'
import Avatar from './components/Avatar';
import Profile from './components/Profile';

export default function AppProfile() {
   let handleClick = (e)=>{
      console.log(e);
      console.log("버튼이 클릭됨");
    }
    return (
      <>
      <button onClick={handleClick}>버튼</button>
      
      <Avatar
      image = "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      isNew={true}/>
        <Profile 
          image = "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name ="James Kim"
          title ="프론트엔드 개발자"
          isNew = {true}
        />
        <Profile
          image="https://images.unsplash.com/photo-1651646781428-18b47ae1e17b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name= "Bob"
          title ="백엔드 개발자"        
        />
        <Profile
          image = "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name = "Anna"
          title ="풀스택 개발자"
        />
      </>
    );
}



