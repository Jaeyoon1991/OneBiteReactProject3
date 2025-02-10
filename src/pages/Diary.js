import { useParams} from "react-router-dom";

const Diary = () => {
    // url경로에 포함된 파라미터를 객체로 변환
    const { id } = useParams();
    return (
        <div>
            <div>{id}번 일기</div>
            <div>Diary 페이지 입니다.</div>
        </div>
    
    )
};
export default Diary;