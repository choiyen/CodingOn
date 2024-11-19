import React from "react";
import pic2 from "./img/pic2.jpeg";

export default function FunctionComponent(props) {
  const { title, author, price, type } = props;
  return (
    <div>
      <h2 style={{ color: "orange", textAlign: "center" }}>
        이번주 베스트 샐러
      </h2>
      {/* 이미지가 Src 폴더에 있을 때에 가능 */}
      <img src={pic2} alt="" style={{ textAlign: "center" }} />
      {/* 이미지가 public 폴더에 존재할 때 */}
      <img src="/logo192.png" alt="" />
      <h2>{title}</h2>
      <div>저자 : {author}</div>
      <div>판매가 : {price}</div>
      <div>구성 : {type} </div>
    </div>
  );
}
