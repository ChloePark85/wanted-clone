import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  font-size: 13px;
  font-weight: 600;
  p {
    cursor: pointer;
    &:hover {
      color: #37f;
      background-color: #ececec;
    }
  }
`;

function SideMenu({ isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: "52px",
          left: "136px",
          backgroundColor: "rgba(0, 0, 0, 0)",
          zIndex: "289",
        },
        content: {
          position: "fixed",
          top: "52px",
          left: "136px",
          border: "1px solid #fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          width: "222px",
          height: "1470px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zindex: "289",
        },
      }}
    >
      <PositionContainer>
        <p>직군 전체</p>
        <p>개발</p>
        <p>경영·비즈니스</p>
        <p>마케팅·광고</p>
        <p>디자인</p>
        <p>영업</p>
        <p>고객서비스·리테일</p>
        <p>미디어</p>
        <p>게임 제작</p>
        <p>HR</p>
        <p>엔지니어링·설계</p>
        <p>금융</p>
        <p>제조·생산</p>
        <p>의료·제약·바이오</p>
        <p>물류·무역</p>
        <p>교육</p>
        <p>식·음료</p>
        <p>법률·법집행기관</p>
        <p>건설·시설</p>
        <p>공공·복지</p>
      </PositionContainer>
    </ReactModal>
  );
}

export default SideMenu;
