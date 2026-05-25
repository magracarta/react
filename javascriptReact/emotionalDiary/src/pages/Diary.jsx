import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/getStringed";
import usePageTitle from "../hooks/usePageTitle";

const Diary = ()=>{
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기`);
    const curDiaryItem = useDiary(params.id);
    if(!curDiaryItem) return <div>로딩중....</div>

    const {createDate, emotionId, content} = curDiaryItem;
    return (
        <div>
           <Header
            title={`${getStringedDate(new Date(createDate))} 기록`}
            leftChild={<Button 
                onClick={()=>{nav(-1)}}
                text={"< 뒤로가기"}/>}
            rightChild={<Button 
                onClick={()=>{
                    nav(`/edit/${params.id}`);
                }}
                text={"수정하기"}
                />}
           />
           <Viewer emotionId={emotionId} content={content}/>
        </div>
    )
}

export default Diary;