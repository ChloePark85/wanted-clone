import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const CareerContainer = styled.div`
  .tag-slide-grid {
    grid-gap: 8px;
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    overflow-y: auto;
  }
  .tag-button {
    display: flex;
    padding: 9px 22px;
    font-weight: 600;
    line-height: 146.7%;
    flex-shrink: 0;
    color: #888;
    outline: none;
    scroll-snap-align: start;
    /* width: 85px; */
    height: 40px;
    position: relative;
    background-color: #fff;
    border-color: #ececec;
    border: 1px solid #ececec;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    box-sizing: border-box;
    border-radius: 25px;
    cursor: pointer;
    &:hover {
      background-color: #ececec;
    }
    > span {
      width: 100%;
      line-height: 146.7%;
      cursor: pointer;
    }
  }
  hr {
    margin: 25px 0 20px;
    height: 1px;
    border: none;
    background-color: #ececec;
    box-sizing: content-box;
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
  }
  .content-tag-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    gap: 10px;
    p {
      font-weight: 400;
      font-size: 15px;
      line-height: 146.7%;
      letter-spacing: 0.0096em;
      color: #666;
    }
    button {
      font-weight: 600;
      font-size: 15px;
      line-height: 146.7%;
      letter-spacing: 0.0096em;
      text-decoration-line: underline;
      color: #36f;
    }
  }
`;

function CareerCategory({ isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          top: "549px",
          left: "202px",
          backgroundColor: "#fff",
          zIndex: "289",
          padding: "10px",
          position: "absolute",
          minWidth: "1200px",
          maxWidth: "1060px",
          //   maxWidth: "2060px",
          border: "1px solid #ececec",
          boxShadow: "0 4px 20px rgb(0 0 0 / 15%)",
          borderRadius: "4px",
          height: "auto",
        },
        content: {
          border: "1px solid #fff",
          overflow: "auto",
          outline: "none",
          backgroundColor: "white",
          display: "flex",
          flexWrap: "wrap",
          gridGap: "8px",
          gap: "8px",
          padding: "0",
          overflowY: "auto",
        },
      }}
    >
      <CareerContainer>
        <div class="tag-slide-grid">
          <button class="tag-button" type="button">
            <span>리더십</span>
          </button>
          <button class="tag-button" type="button">
            <span>커리어고민</span>
          </button>
          <button class="tag-button" type="button">
            <span>인간관계</span>
          </button>
          <button class="tag-button" type="button">
            <span>취업/이직</span>
          </button>
          <button class="tag-button" type="button">
            <span>라이프스타일</span>
          </button>
          <button class="tag-button" type="button">
            <span>조직문화</span>
          </button>
          <button class="tag-button" type="button">
            <span>IT/기술</span>
          </button>
          <button class="tag-button" type="button">
            <span>회사생활</span>
          </button>
          <button class="tag-button" type="button">
            <span>HR</span>
          </button>
          <button class="tag-button" type="button">
            <span>디자인</span>
          </button>
          <button class="tag-button" type="button">
            <span>마케팅</span>
          </button>
          <button class="tag-button" type="button">
            <span>브랜딩</span>
          </button>
          <button class="tag-button" type="button">
            <span>개발</span>
          </button>
          <button class="tag-button" type="button">
            <span>서비스기획</span>
          </button>
          <button class="tag-button" type="button">
            <span>MD</span>
          </button>
          <button class="tag-button" type="button">
            <span>경영전략</span>
          </button>
          <button class="tag-button" type="button">
            <span>UX/UI</span>
          </button>
          <button class="tag-button" type="button">
            <span>데이터</span>
          </button>
          <button class="tag-button" type="button">
            <span>콘텐츠 제작</span>
          </button>
          <button class="tag-button" type="button">
            <span>노무</span>
          </button>
        </div>
        <hr />
        <div class="content-tag-slide">
          <p>요즘 내 관심사 선택하고 맞춤 콘텐츠 받기!</p>
          <button>관심태그 설정하기</button>
        </div>
      </CareerContainer>
    </ReactModal>
  );
}

export default CareerCategory;
