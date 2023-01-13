import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

const SearchBarContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  background-color: #fff;
  border: 0;
  box-sizing: border-box;
  display: block;
  form {
    margin: 0;
    padding: 0;
    border: 0;
    display: block;
    font-size: 14px;
    line-height: 1.4;
    color: #333333;
    width: 750px;
  }
  input {
    height: 50px;
    line-height: 50px;
    width: 100%;
    margin: 0;
    padding: 0 36px 0 60px;
    border: 1px solid #f2f4f7;
    border-radius: 25px;
    font-size: 16px;
    color: #767676;
    background-color: #f2f4f7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
  }
  .close {
    position: absolute;
    font-size: 12px;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    color: #999;
    padding: 15px;
    margin: 0;
    border: 0;
    background: none;
    cursor: pointer;
    overflow: visible;
    text-transform: none;
    box-sizing: border-box;
  }
`;

const TagTitle = styled.div`
  padding: 50px 0 0;
  margin: 0 auto;
  max-width: 1060px;
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h4 {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin: 0;
    padding: 0;
    border: 0;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #767676;
    cursor: pointer;
  }
`;
const TagContainer = styled.ul`
  .tag {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    font-weight: 400;
    color: #333;
    padding: 0 26px;
    border-radius: 25px;
    margin-right: 12px;
    cursor: pointer;
  }
`;

const ResultSection = styled.div`
  padding-top: 20px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  position: relative;
  padding: 50px 0 0;
  max-width: 1060px;
  ul {
    padding-bottom: 40px;
    list-style: none;
  }
  li {
    margin-top: 10px;
    display: block;
    position: relative;
    width: 100%;
    font-size: 18px;
    line-height: 37px;
    padding: 0 27px;
    margin-bottom: 2px;
    color: #333;
    &:hover {
      background-color: #f2f4f7;
      cursor: pointer;
    }
  }
`;

function Search({ isOpen }) {
  const [searchWord, setSearchWord] = useState("");
  const [relatedKeyword, setRelatedKeyword] = useState("");
  const [searchResult, setSearchResult] = useState("default");
  const handleChange = (e) => {
    setSearchWord(e.target.value);
    setRelatedKeyword(getRelatedKeyword(e.target.value));
    setSearchResult("result");
  };
  const getRelatedKeyword = (word) => {
    axios
      .get(`https://prod.seolki.shop/recruit/search?word=${word}`)
      .then((res) => {
        console.log(res.data.result);
        setRelatedKeyword(res.data.result);
      });
    return [];
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: "289",
        },
        content: {
          position: "fixed",
          top: "0px",
          left: "0px",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          outline: "none",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zindex: "289",
        },
      }}
    >
      <SearchBarContainer>
        <form>
          <input
            type="search"
            value={searchWord}
            placeholder="포지션 검색"
            onChange={handleChange}
            autoComplete="off"
          />

          <IoIosSearch
            style={{
              position: "absolute",
              top: "26px",
              left: "20px",
              color: "#939393",
              width: "18px",
              height: "18px",
              margin: "0 16px 0 6px",
              transform: "translateY(-50%)",
              viewBox: "0 0 18 18",
            }}
          />
          <button class="close" type="button">
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
              ></path>
            </svg>
          </button>
        </form>
        {searchResult === "default" && (
          <>
            <TagTitle>
              <h4>추천태그로 검색해 보세요</h4>
              <span>
                기업태그 홈 이동하기
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    fill="currentColor"
                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                  ></path>
                </svg>
              </span>
            </TagTitle>
            <TagContainer>
              <button class="tag" style={{ background: "#f0f8f8" }}>
                #수유실
              </button>
              <button class="tag" style={{ background: "#eeedf4" }}>
                #퇴사율5%이하
              </button>
              <button class="tag" style={{ background: "#e8edf3" }}>
                #생일선물
              </button>
              <button class="tag" style={{ background: "#e9f4fb" }}>
                #연봉상위2~5%
              </button>
              <button class="tag" style={{ background: "#effbf3" }}>
                #헬스장
              </button>
            </TagContainer>
          </>
        )}
        {searchResult === "result" && (
          <ResultSection>
            {relatedKeyword && (
              <ul>
                {relatedKeyword.map((keyword, index) => (
                  <li key={index}>{keyword.title}</li>
                ))}
              </ul>
            )}
          </ResultSection>
        )}
      </SearchBarContainer>
    </ReactModal>
  );
}

export default Search;
