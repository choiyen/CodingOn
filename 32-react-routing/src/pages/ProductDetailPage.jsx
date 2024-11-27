import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  // products : {id, name, email, body}[]
  console.log("useParams", useParams());
  const { id } = useParams(); // '1'
  console.log(id);
  const tartgetProduct = products[Number(id) - 1];
  const { name, email, body } = tartgetProduct;

  const navigate = useNavigate();
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>
      <ul>
        <li>상품 번호 : {id}</li>
        <li>상품명 : {name}</li>
        <li>판매자 : {email}</li>
        <li>상세 설명 : {body}</li>
      </ul>
    </div>
  );
}
