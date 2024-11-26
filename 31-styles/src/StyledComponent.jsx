import React from "react";
import styled from "styled-components";

// CSS IN JS : js 안에 css를 작성
// styled-componentsm emotion, styled-jsx
// 각 컴포넌트마다 격리된 스타일 적용 가능

const StyledContainer = styled.div`
  display: flex;
`;
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$bgColor};
`;
const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox $bgColor="red" />
      <StyledBox $bgColor="orange" />
      <StyledBox $bgColor="yellow" />
      <StyledImg src="/logo192.png" />
    </StyledContainer>
  );
}
