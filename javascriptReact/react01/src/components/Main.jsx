import "./main.css";
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열의 값만 렌더링 된다.
// 3. 모든태그는 닫혀있어야 한다.
// 4. 최상위 태그는 무조건 하나여야 한다.


const Main=()=>{
    const user = {
        name:'이정현',
        isLogin : true,
    }
    return (
        <>
            {user.isLogin?<div
                className="logout"
            >로그아웃</div>:<div>로그인</div>}
        </>
    )
}

export default Main;