import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
export default function Studentkdt() {
  const { student } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(); //node의 req.query 값과 동일
  const keyword = searchParams.get("name");
  const navigate = useNavigate();
  return (
    <div>
      <p>
        학생의 이름은 <span style={{ color: "green" }}>{student}</span> 입니다.
      </p>
      {keyword && (
        <div>
          실제 이름은 <span style={{ color: "red" }}>{keyword}</span> 입니다.
        </div>
      )}
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
