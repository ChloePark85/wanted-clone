import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TopBanner from "../Components/TopBanner";
import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { IoAlertCircleSharp, IoChevronForwardOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import CareerCategory from "../Components/CareerCategory";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ArticleDetail from "../Components/ArticleDetail";

const ContentList = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 60px 0px;
  .section-wrapper {
    margin: 0 auto;
  }
  .title {
    text-align: center;
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    line-height: 1.33;
    font-weight: 700;
    color: #333;
  }

  .content-category {
    position: relative;
    overflow: scroll;
  }
  .tag-slide-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 20px 0;
    grid-gap: 8px;
    gap: 8px;
  }
  .tag-slide {
    margin: 0 0 0 100px;
    max-width: calc(100%-40px -8px);
    position: relative;
    display: flex;
  }
  .tag-slide-grid {
    grid-gap: 8px;
    gap: 8px;
    display: flex;
    padding-bottom: 0.5px;
    scroll-snap-type: x mandatory;
    overscroll-behavior: contain;
    flex-direction: row;
    align-items: center;
    width: 1000px;
    /* overflow-x: scroll; */
    overflow: scroll;
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
  .tag-open-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ececec;
    box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
    border-radius: 4px;
    color: #939393;
    background-color: #fff;
    outline: none;
    height: 38.5px;
    width: 38px;
  }
  .content-more {
    display: flex;
    justify-content: center;
  }
  .content-more-button {
    border: #ececec 1px solid;
    color: #333;
    margin: 0 auto;
    width: 289px;
    height: 48px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    padding: 0 27px;
    box-sizing: border-box;
    border-radius: 25px;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    font-size: 16px;
  }
  .content-more-button-label {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
  }
  ul {
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    grid-gap: 32px 20px;
    gap: 32px 20px;
    margin: 0 auto;
  }
  li {
    position: relative;
    transition: all 0.1s ease-out;
    will-change: transform;
    width: calc(25% - 15px);
    display: list-item;
  }
  .thumbnail {
    position: relative;
    height: 150px;
    padding-left: 0;
    width: 214px;
    padding-bottom: 70%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: opacity, color 0.1s ease-out;
    box-sizing: border-box;
  }
  .article-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    word-break: break-word;
    column-gap: 20px;
  }
`;

const LineBanner = styled.div`
  .line-banner-box {
    margin: 60px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
    text-align: center;
    width: 1060px;
    height: 66px;
    box-sizing: border-box;
    border-radius: 50px;
    background-image: linear-gradient(
      102deg,
      #2f5fef -127%,
      #046afe 50%,
      #00d2dd 145%
    );
  }
  .line-banner-text {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 17px 30px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
  }
`;

const EventList = styled.div`
  .event-list-container {
    margin: 0 auto;
    padding: 60px 0;
    max-width: 1060px;
  }
  .event-list-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    grid-gap: 8px;
    gap: 8px;
    box-sizing: border-box;
  }
  .event-title {
    font-size: 22px;
    text-align: center;
  }
  .arrow-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #e1e2e3;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);
    font-size: 16px;
    color: #767676;
    cursor: pointer;
  }
`;

const RecruitingSection = styled.div`
  padding: 60px 0 80px;
  display: block;
  .recruiting-wrapper {
    max-width: 1060px;
    margin: 0 auto;
  }
  .recruiting-title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    grid-gap: 8px;
    gap: 8px;
    justify-content: center;
  }
  .grid-container {
    border: 1px solid #ececec;
    border-radius: 4px;
    color: #eee;
    align-self: auto;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    box-sizing: border-box;
    display: flex;
    width: 100%;
  }
  .grid-container-detail {
    padding: 18px 0 0;
    width: 25%;
    align-self: auto;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0;
    display: flex;
  }
  .grid-container-span {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 32px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .grid-container-svg {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    flex-shrink: 0;
    cursor: pointer;
  }
  .grid-container-button {
    height: 50px;
    font-size: 16px;
    color: #333;
    padding: 6px 8px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 64px;
    box-sizing: border-box;
    border-radius: 25px;
    font-weight: 700;
    border: none;
    line-height: normal;
    cursor: pointer;
  }
  button {
    background: white;
  }
`;

function Home() {
  const [articles, setArticles] = useState([]);
  // 전체 아티클 리스트 불러오기
  useEffect(() => {
    axios
      .get("https://prod.seolki.shop/home/all")
      .then((res) => setArticles(res.data.result))
      .catch((err) => console.log(err));
  }, []);
  console.log(articles);

  // 관심분야에 따라 다른 아티클 불러오기: too many rerenderers 오류
  // const [interestIdx, setInterestIdx] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(`https://prod.seolki.shop/home/insight?interestIdx=${interestIdx}`)
  //     .then((res) => {
  //       setArticles(res.data.result);
  //     });
  // }, [interestIdx]);

  // const handleInterestTagClick = (interestIdx) => {
  //   setInterestIdx(interestIdx);
  // };

  // 태그 선택 버튼 클릭시 모달 오픈
  const [isOpen, setOpen] = useState(false);
  const handleTagClick = () => {
    setOpen(true);
  };

  // 아티클 클릭시 모달 오픈
  // const [selectedArticleId, setSelectedArticleId] = useState(null);
  // const [showArticleModal, setShowArticleModal] = useState(false);

  // const handleArticleClick = (homeArticleIdx) => {
  //   setSelectedArticleId(homeArticleIdx);
  //   setShowArticleModal(true);
  // };

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "25px" }}>
        <TopBanner />
      </div>
      <ContentList>
        <div class="section-wrapper">
          <div class="title">
            <div class="title-wrapper">
              <span>나에게 필요한 커리어 인사이트</span>
              <button>
                <AiOutlineQuestionCircle
                  style={{ width: "24px", height: "24px", color: "grey" }}
                />
              </button>
            </div>
            <div class="content-category">
              <div class="tag-slide-container">
                <div class="tag-slide">
                  <div class="tag-slide-grid">
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(1)}
                      type="button"
                    >
                      리더십
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(2)}
                      type="button"
                    >
                      커리어고민
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(3)}
                      type="button"
                    >
                      인간관계
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(4)}
                      type="button"
                    >
                      취업/이직
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(13)}
                      type="button"
                    >
                      라이프스타일
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(12)}
                      type="button"
                    >
                      조직문화
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(2)}
                      type="button"
                    >
                      IT/기술
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(9)}
                      type="button"
                    >
                      회사생활
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(6)}
                      type="button"
                    >
                      HR
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(19)}
                      type="button"
                    >
                      디자인
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(8)}
                      type="button"
                    >
                      마케팅
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(11)}
                      type="button"
                    >
                      브랜딩
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(3)}
                      type="button"
                    >
                      개발
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(15)}
                      type="button"
                    >
                      서비스기획
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(16)}
                      type="button"
                    >
                      MD
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(10)}
                      type="button"
                    >
                      경영전략
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(18)}
                      type="button"
                    >
                      UX/UI
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(5)}
                      type="button"
                    >
                      데이터
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(7)}
                      type="button"
                    >
                      콘텐츠 제작
                    </button>
                    <button
                      class="tag-button"
                      // onClick={handleInterestTagClick(17)}
                      type="button"
                    >
                      노무
                    </button>
                  </div>
                  <button
                    class="tag-open-button"
                    type="button"
                    onClick={handleTagClick}
                  >
                    <svg style={{ width: "16px", height: "3px" }}>
                      <path
                        d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <CareerCategory isOpen={isOpen} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li
              style={{
                width: "100%",
                marginBottom: "50px",
                display: "flex",
                flexWrap: "wrap",
                gridGap: "32px 20px",
                gap: "32px 20px",
                margin: "0 250px 0 100px",
              }}
            >
              {articles.map((article) => (
                <div
                  key={article.homeArticleIdx}
                  style={{ position: "relative", width: "calc(25% - 15px" }}
                >
                  <div>
                    <img
                      src={article.articleImg}
                      alt={article.articleTitle}
                      style={{
                        width: "248px",
                        height: "184px",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      // onClick={handleArticleClick(article.homeArticleIdx)}
                    />
                  </div>
                  <div style={{ padding: "14px 0", width: "214px" }}>
                    <div>{article.articleTitle}</div>
                    <div>{article.articleContent}</div>
                    <div>{article.provider}</div>
                  </div>
                </div>
              ))}
            </li>
            {/* {showArticleModal && (
              <ArticleDetail articleId={selectedArticleId} />
            )} */}
          </ul>
          <div class="content-more">
            <button class="content-more-button">
              <span class="content-more-button-label">
                더 많은 콘텐츠 보기
                <BsChevronDown />
              </span>
            </button>
          </div>
        </div>
      </ContentList>

      <LineBanner>
        <div class="line-banner-box">
          <div class="line-banner-text">
            <span>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.</span>
            <em class="emoji">👀</em>
            <IoChevronForwardOutline />
          </div>
        </div>
      </LineBanner>
      <EventList>
        <div class="event-list-container">
          <div class="event-list-title">
            <button type="button" class="arrow-button">
              <svg
                viewBox="0 0 18 18"
                style={{
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  fill: "currentColor",
                  flexShrink: "0",
                }}
              >
                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
              </svg>
            </button>
            <div class="event-title">
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.33",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                커리어 성장을 위한 맞춤 이벤트
              </p>
              <p
                style={{
                  margin: "5px 0 0",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "normal",
                  verticalAlign: "middle",
                  color: "#767676",
                }}
              >
                이벤트 전체보기
              </p>
            </div>
            <button type="button" class="arrow-button">
              <svg
                viewBox="0 0 18 18"
                style={{
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  fill: "currentColor",
                  flexShrink: "0",
                }}
              >
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </button>
          </div>
        </div>
      </EventList>
      <div class="divider-container" style={{ margin: "0 auto" }}>
        <hr
          style={{
            height: "1px",
            margin: "0",
            border: "none",
            backgroundColor: "#ececec",
            boxSizing: "content-box",
            maxWidth: "1060px",
            display: "block",
            marginBlockStart: "0.5em",
            marginBlockEnd: "0.5em",
            marginInlineStart: "auto",
            marginInlineEnd: "auto",
          }}
        />
      </div>
      <RecruitingSection>
        <div class="recruiting-wrapper">
          <div class="recruiting-title">
            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.33",
                fontWeight: "700",
                color: "#333",
              }}
            >
              채용 정보를 찾고 계셨나요?
            </p>
          </div>
          <div class="grid-container">
            <div
              class="grid-container-detail"
              style={{ borderRight: "1px solid #ececec" }}
            >
              <span class="grid-container-span">
                <svg class="grid-container-svg">
                  <path
                    style={{ fill: "#333", userSelect: "none" }}
                    d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"
                  ></path>
                </svg>
              </span>
              <button class="grid-container-button">
                채용공고&nbsp;
                <IoChevronForwardOutline />
              </button>
            </div>
            <div
              class="grid-container-detail"
              style={{ borderRight: "1px solid #ececec" }}
            >
              <span class="grid-container-span">
                <svg class="grid-container-svg">
                  <path
                    style={{ fill: "#333", userSelect: "none" }}
                    d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"
                  ></path>
                </svg>
              </span>
              <button class="grid-container-button">
                내 프로필&nbsp;
                <IoChevronForwardOutline />
              </button>
            </div>
            <div
              class="grid-container-detail"
              style={{ borderRight: "1px solid #ececec" }}
            >
              <span class="grid-container-span">
                <svg class="grid-container-svg">
                  <path
                    style={{ fill: "#333", userSelect: "none" }}
                    d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"
                  ></path>
                </svg>
              </span>
              <button class="grid-container-button">
                매치업&nbsp;
                <IoChevronForwardOutline />
              </button>
            </div>
            <div class="grid-container-detail">
              <span class="grid-container-span">
                <svg class="grid-container-svg">
                  <path
                    style={{ fill: "#333", userSelect: "none" }}
                    d="M10.667 21.667a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2l-13.805.001a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138a3.67 3.67 0 0 1 3.529-2.667zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333zm10.666-11.334A3.67 3.67 0 0 1 24.862 15H28a1 1 0 0 1 0 2h-3.138a3.67 3.67 0 0 1-7.057 0H4a1 1 0 0 1 0-2h13.805a3.67 3.67 0 0 1 3.528-2.667zm0 2a1.668 1.668 0 0 0 0 3.334 1.668 1.668 0 0 0 0-3.334zM10.667 3a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2H14.195a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138A3.67 3.67 0 0 1 10.667 3zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333z"
                  ></path>
                </svg>
              </span>
              <button class="grid-container-button">
                직군별 연봉&nbsp;
                <IoChevronForwardOutline />
              </button>
            </div>
          </div>
        </div>
      </RecruitingSection>
      <Footer />
    </div>
  );
}

export default Home;
