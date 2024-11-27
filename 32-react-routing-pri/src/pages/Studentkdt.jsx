import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
export default function Studentkdt() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { student } = useParams();
  const search = searchParams.get("name");
  console.log("ㅇㅇㄹ");
  return (
    <div>
      <p>학생의 이름은 {student} 입니다.</p>
      {search || <div> 실제 이름은 {search} d입니다 </div>}
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
