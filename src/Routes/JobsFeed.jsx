import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import JobBanner from "../Components/JobBanner";
import styled from "styled-components";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/user";
import axios from "axios";

const LineBanner = styled.div`
  margin: 60px auto;
  .line-banner {
    display: flex;
    word-break: keep-all;
    text-align: center;
    width: 1058px;
    align-items: center;
    margin: 60px auto;
    box-sizing: border-box;
  }
  .line-banner-banner {
    background-image: linear-gradient(
      90deg,
      #01a9fe -12%,
      #2f5fef 37%,
      #046afe 72%,
      #00d2dd 110%
    );
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    border-radius: 50px;
    box-sizing: border-box;
    column-gap: 10px;
  }
  .line-banner-search {
    width: 28px;
    height: 28px;
    color: white;
  }
`;

const MatchedJobContainer = styled.div`
  background-image: url("https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-dev.static.wanted.co.kr%2Fbanner%2FJobsfeed_ai_banner.png&w=1440&q=75");
  position: relative;
  display: block;
  margin: 60px auto;
  height: 355px;

  .matchedjob-header {
    margin-bottom: 4px;
    position: relative;
  }
  .matchedjob-header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    gap: 10px;
    padding-top: 60px;
    padding-bottom: 40px;
    transform: translateX(-15px);
  }
  .ai-logo {
    width: 83px;
    height: 80px;
    fill: none;
  }
  .ai-text-logo {
    width: 170px;
    margin-bottom: 3px;
  }
  .matchedjob-header-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: normal;
    text-align: left;
    color: #111;
    vertical-align: middle;
  }
  .matchedjob-header-text-detail {
    font-size: 18px;
    margin-bottom: 6px;
    text-align: center;
    align-items: center;
    vertical-align: middle;
    display: flex;
    flex-direction: row;
  }
  .emptymatched-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .emptymatched-text {
    color: #555;
    font-size: 16px;
    line-height: 19.2px;
    word-break: keep-all;
    font-weight: 500;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .emptymatched-button {
    padding: 10px 20px;
    border-radius: 25px;
    background-color: #36f;
    font-size: 16px;
    font-weight: 700;
    color: #fefefe;
    line-height: 22px;
    width: 127px;
    height: 42px;
    cursor: pointer;
    border: none;
    white-space: nowrap;
  }
`;

const CareerConnectBanner = styled.div`
  max-width: 1060px;
  position: relative;
  height: 103px;
  border-radius: 10px;
  background: #2b4bc8;
  cursor: pointer;
  overflow: hidden;
  display: block;
  margin: 60px auto;

  .banner-pic {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .career-connect-button {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 32px 40px;
  }
  .career-connect-text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    font-weight: 800;
    line-height: 26px;
    color: #fff;
  }

  .career-connect-img {
    width: 100%;
    height: 100%;
    z-index: 5;
    position: absolute;
    bottom: -7px;
    width: 124px;
    right: 240px;
  }
  strong {
    z-index: 1;
    border-radius: 20px;
    background-color: #fff;
    color: #2b4bc8;
    font-size: 15px;
    line-height: 18px;
    font-weight: 600;
    padding: 11px 20px;
    width: 134px;
    height: 40px;
    box-sizing: border-box;
    white-space: nowrap;
    cursor: pointer;
  }
`;

const ShortcutContainer = styled.div`
  max-width: 1060px;
  display: block;
  margin: 60px auto;
  .shortcut-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #333;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    word-break: break-all;
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1;
    height: 80px;
  }
  li button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 20px;
    font-size: 18px;
  }
  li button > svg {
    margin-right: 12px;
    margin-bottom: 1px;
    width: 28px;
    height: 28px;
  }
  li:first-child {
    background-color: #f2f5ff;
    border-top-left-radius: 38.5px;
    border-bottom-left-radius: 38.5px;
    border-left: none;
  }
  li:last-child {
    background-color: #f2fbf5;
    border-top-right-radius: 38.5px;
    border-bottom-right-radius: 38.5px;
  }
`;

const CompanySection = styled.div`
  .company-list-container {
    margin: 0 auto;
    padding: 60px 0;
    max-width: 1060px;
  }
  .company-list-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    grid-gap: 8px;
    gap: 8px;
    box-sizing: border-box;
  }
  .company-title {
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

const FloatingButton = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: rgb(36 36 36 / 15%) 0px 20px 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(5, 5, 5);
  position: sticky;
  left: 1367px;
  bottom: 30px;

  .floatingbutton-data {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: rgb(5, 5, 5);
    display: inline-flex;
    justify-content: center;
    margin: 0px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    padding: 0px;
  }
  .floatingbutton-icon {
    position: absolute;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0px;
  }
  .floatingbutton-icon > svg {
    width: 24px;
    height: 24px;
    max-height: 100%;
  }
`;

const JobListContentWrapper = styled.div`
  position: relative;
  max-width: 1060px;
  margin: 0 130px;
  padding: 20px 0 80px;
  .job-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    word-break: break-word;
    column-gap: 20px;
  }
  .job-card-position {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 10px;
    position: relative;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-align: left;
    word-break: break-word;
  }
  .job-card-company {
    color: #333;
    font-weight: 600;
    font-size: 14px;
  }
  .job-card-location {
    font-weight: 400;
    color: #999;
  }
  .reward {
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    word-break: break-word;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

function JobsFeed() {
  const userLoggedIn = useRecoilValue(userState).isLogin;

  const [recommendedJobs, setRecommendedJobs] = useState([]);

  useEffect(() => {
    const getRecommendJobs = async () => {
      const response = await fetch(
        "https://prod.seolki.shop/recruit/recommend",
        {
          headers: {
            "X-ACCESS-TOKEN":
              "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4Ijo1LCJpYXQiOjE2NzI5MDQ5NzEsImV4cCI6MTY3NDM3NjIwMH0.Q5Q_YvesQ7LyxNkBrcFOSu1fIVOnIZG9aRxI3QiVYgA",
          },
        }
      );
      console.log(response);
      setRecommendedJobs(response.data.result);
    };
    getRecommendJobs();
  }, []);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "25px" }}>
        <JobBanner />
      </div>
      <Link to="/joblist">
        <LineBanner>
          <div class="line-banner">
            <div class="line-banner-banner">
              <svg
                class="line-banner-search"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                <path d="M24.465 25.702a.875.875 0 0 0 1.237-1.237L18.12 16.88l-.296-.257a.875.875 0 0 0-1.187.043 7.876 7.876 0 1 1 1.96-3.216.875.875 0 0 0 1.67.525c.292-.93.442-1.902.442-2.893a9.625 9.625 0 0 0-9.625-9.625 9.625 9.625 0 0 0-9.625 9.625c0 5.315 4.31 9.625 9.625 9.625a9.589 9.589 0 0 0 6.161-2.23l7.22 7.224z"></path>
              </svg>
              채용 중인 포지션 보러가기
            </div>
          </div>
        </LineBanner>
      </Link>
      {userLoggedIn ? (
        <JobListContentWrapper>
          <div class="company-list-container">
            <div class="company-list-title">
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
              <div class="company-title">
                <p
                  style={{
                    fontSize: "22px",
                    lineHeight: "1.33",
                    fontWeight: "700",
                    color: "#333",
                  }}
                >
                  Wanted AI가 제안하는 합격률 높은 포지션
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
                  포지션 전체보기
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
            <div class="company-list">
              <div className="body" class="job-card">
                {recommendedJobs.map((job) => (
                  <div key={job.jobIdx}>
                    <div>
                      <img
                        src={job.jobImgUrl}
                        alt={job.company}
                        style={{
                          width: "248px",
                          height: "184px",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                    <div style={{ padding: "14px 0", width: "214px" }}>
                      <div className="job-card-position">{job.title}</div>
                      <div className="job-card-company">{job.company}</div>
                      <div className="job-card-location">{job.region}</div>
                      <div className="reward">채용보상금 {job.money}원</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </JobListContentWrapper>
      ) : (
        <MatchedJobContainer>
          <div class="matchedjob-header">
            <div class="matchedjob-header-content">
              <img
                src="https://ifh.cc/g/07gmDc.png"
                class="ai-logo"
                alt="ai-logo"
              />
              <img
                src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
                class="ai-text-logo"
                alt="ai-text-logo"
              />
            </div>
            <h2 class="matchedjob-header-text">
              <div class="matchedjob-header-text-detail">
                <img
                  src="https://static.wanted.co.kr/images/ai/logo-wantedai.png"
                  style={{ width: "114px", marginBottom: "3px" }}
                  alt=""
                />
                <span>가 제안하는 합격률 높은 포지션</span>
                <button type="button">
                  <AiOutlineQuestionCircle
                    style={{ width: "24px", height: "24px", color: "grey" }}
                  />
                </button>
              </div>
            </h2>
          </div>
          <div class="emptymatched-container">
            <h3 class="emptymatched-text">
              회원가입하면 포지션을 추천해드려요.
            </h3>
            <Link to="/login">
              <button class="emptymatched-button" type="button">
                지금 시작하기
              </button>
            </Link>
          </div>
        </MatchedJobContainer>
      )}

      <CareerConnectBanner>
        <picture class="banner-pic">
          <img
            src="https://static.wanted.co.kr/career_connect/banner-back-pc-jobsfeed.png"
            alt="career-connect-icon"
          />
        </picture>
        <button type="button" class="career-connect-button">
          <div class="career-connect-text">
            <p>내 연차에 이 연봉 괜찮은가? 궁금할 땐</p>
            <strong>커리어 중간점검</strong>
            <img
              src="https://static.wanted.co.kr/career_connect/gomin.png"
              alt="character"
              class="career-connect-img"
            />
          </div>
        </button>
      </CareerConnectBanner>
      <ShortcutContainer>
        <ul class="shortcut-list">
          <li>
            <button type="button">
              <svg>
                <path d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"></path>
              </svg>
              내 프로필
            </button>
          </li>
          <li>
            <button type="button">
              <svg>
                <path d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"></path>
              </svg>
              매치업
            </button>
          </li>
        </ul>
      </ShortcutContainer>
      <CompanySection>
        <div class="company-list-container">
          <div class="company-list-title">
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
            <div class="company-title">
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.33",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                #재택근무 회사를 소개합니다
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
                포지션으로 더보기
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
      </CompanySection>
      <CompanySection>
        <div class="company-list-container">
          <div class="company-list-title">
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
            <div class="company-title">
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.33",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                #연봉이 최고의 복지 회사를 소개합니다
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
                포지션으로 더보기
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
      </CompanySection>
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
      <CompanySection>
        <div class="company-list-container">
          <div class="company-list-title">
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
            <div class="company-title">
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.33",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                테마로 모아보는 요즘 채용
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
      </CompanySection>
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
      <CompanySection>
        <div class="company-list-container">
          <div class="company-list-title" style={{ justifyContent: "center" }}>
            <div class="company-title">
              <p
                style={{
                  fontSize: "22px",
                  lineHeight: "1.33",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                요즘 뜨는 포지션
              </p>
            </div>
          </div>
        </div>
      </CompanySection>

      <Footer />
      <FloatingButton>
        <button class="floatingbutton-data">
          <div class="floatingbutton-icon">
            <svg>
              <path
                d="M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z"
                transform="translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000)"
                style={{
                  fill: "rgb(255,255,255",
                }}
              ></path>
            </svg>
          </div>
        </button>
      </FloatingButton>
    </>
  );
}

export default JobsFeed;
