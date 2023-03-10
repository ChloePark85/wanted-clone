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
            <span>?????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>???????????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>????????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>??????/??????</span>
          </button>
          <button class="tag-button" type="button">
            <span>??????????????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>????????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>IT/??????</span>
          </button>
          <button class="tag-button" type="button">
            <span>????????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>HR</span>
          </button>
          <button class="tag-button" type="button">
            <span>?????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>?????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>?????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>??????</span>
          </button>
          <button class="tag-button" type="button">
            <span>???????????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>MD</span>
          </button>
          <button class="tag-button" type="button">
            <span>????????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>UX/UI</span>
          </button>
          <button class="tag-button" type="button">
            <span>?????????</span>
          </button>
          <button class="tag-button" type="button">
            <span>????????? ??????</span>
          </button>
          <button class="tag-button" type="button">
            <span>??????</span>
          </button>
        </div>
        <hr />
        <div class="content-tag-slide">
          <p>?????? ??? ????????? ???????????? ?????? ????????? ??????!</p>
          <button>???????????? ????????????</button>
        </div>
      </CareerContainer>
    </ReactModal>
  );
}

export default CareerCategory;
