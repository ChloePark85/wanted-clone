import React from "react";
import styled from "styled-components";

const Base = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 105px;
  padding-bottom: 105px;
  background-color: #f8f8fa;
`;

const InterestBoxWrapper = styled.div`
  width: 400px;
  max-width: 100vw;
`;

const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperBody = styled.div`
  border: 1px solid #ececec;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 39px;
  .step {
    position: relative;
    border-bottom: 1px solid #e1e2e3;
    padding: 20px;
  }
  .step-container {
    display: flex;
    justify-content: flex-start;
    list-style: none;
  }
  li {
    flex: none;
    height: 23px;
  }
  li.active {
    color: #333;
    margin-right: auto;
    margin-left: 0;
  }
  li.active > em {
    background: #36f;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    font-style: normal;
    line-height: 1em;
    margin-right: 6px;
  }
  li > em {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    font-style: normal;
    line-height: 1em;
    margin-right: 6px;
    background: #f2f4f7;
    color: #ccc;
  }
  li > span {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    display: inline-block;
    margin-left: 4px;
    line-height: 23px;
  }
`;

const WrapperBodyContainer = styled.div`
  padding: 29px 19px 24px;
  .title {
    margin-bottom: 34px;
    font-size: 15px;
    text-align: left;
    color: #333;
    font-weight: 600;
  }
  p {
    line-height: 1.53;
    white-space: pre-line;
  }
  img {
    width: 15px;
    height: 15px;
    margin-right: 4px;
    margin-top: -5px;
  }
  .header-title {
    font-weight: 700;
    font-size: 15px;
    color: #666;
    margin-bottom: 14px;
  }
  .tag-button {
    float: left;
    margin: 0 10px 16px 0;
    height: 38px;
    > button {
      display: inline-block;
      padding: 0 15px;
      font-size: 15px;
      height: 100%;
      font-weight: 500;
      color: #666;
      border: 1px solid transparent;
      border-radius: 21px;
      background: #f2f4f7;
      line-height: 1em;
    }
  }
`;

const StartButton = styled.button`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #36f;
  border: 0;
  border-radius: 27px;
  cursor: pointer;
`;

function InterestTag() {
  return (
    <Base>
      <InterestBoxWrapper>
        <WrapperLogo>
          <img
            src="https://ifh.cc/g/19Z8Ny.png"
            style={{ width: "147px", height: "24px" }}
            alt="wanted"
          />
        </WrapperLogo>
        <WrapperBody>
          <div className="step">
            <ul className="step-container">
              <li className="active">
                <em>
                  <span>1</span>
                </em>
                <em>
                  <span>2</span>
                </em>
                <em>
                  <span>3</span>
                </em>
                <span>관심태그 설정</span>
              </li>
            </ul>
          </div>
          <WrapperBodyContainer>
            <div className="title">
              <p>
                000님의 커리어를 위한
                <br />
                콘텐츠를 추천해 드릴게요!
              </p>
            </div>
            <div className="interest-tags" style={{ marginBottom: "24px" }}>
              <div
                className="interest-tag-inner"
                style={{ paddingBottom: "0" }}
              >
                <ul style={{ display: "flex", flexWrap: "wrap" }}>
                  <li style={{ minWidth: "90%" }}>
                    <div className="header" style={{ marginBottom: "14px" }}>
                      <img
                        src="https://static.wanted.co.kr/images/tags/0a15b242.png"
                        alt=""
                      />
                      <span className="header-title">직장인 공감</span>
                    </div>
                  </li>
                  <ul style={{ marginBottom: "0" }}>
                    <li class="tag-button">
                      <button>커리어고민</button>
                    </li>
                    <li class="tag-button">
                      <button>취업/이직</button>
                    </li>
                    <li class="tag-button">
                      <button>회사생활</button>
                    </li>
                    <li class="tag-button">
                      <button>인간관계</button>
                    </li>
                  </ul>
                  <li style={{ minWidth: "90%" }}>
                    <div className="header" style={{ marginBottom: "14px" }}>
                      <img
                        src="https://static.wanted.co.kr/images/tags/0a15b242.png"
                        alt=""
                      />
                      <span className="header-title">관심분야</span>
                    </div>
                  </li>
                  <ul style={{ marginBottom: "0" }}>
                    <li class="tag-button">
                      <button>개발</button>
                    </li>
                    <li class="tag-button">
                      <button>데이터</button>
                    </li>
                    <li class="tag-button">
                      <button>HR</button>
                    </li>
                    <li class="tag-button">
                      <button>서비스기획</button>
                    </li>
                    <li class="tag-button">
                      <button>마케팅</button>
                    </li>
                    <li class="tag-button">
                      <button>디자인</button>
                    </li>
                    <li class="tag-button">
                      <button>경영/전략</button>
                    </li>
                    <li class="tag-button">
                      <button>CS/CX</button>
                    </li>
                    <li class="tag-button">
                      <button>MD</button>
                    </li>
                    <li class="tag-button">
                      <button>콘텐츠 제작</button>
                    </li>
                  </ul>
                  <li style={{ minWidth: "90%" }}>
                    <div className="header" style={{ marginBottom: "14px" }}>
                      <img
                        src="https://static.wanted.co.kr/images/tags/0a15b242.png"
                        alt=""
                      />
                      <span className="header-title">트렌드/인사이트</span>
                    </div>
                  </li>
                  <ul style={{ marginBottom: "0" }}>
                    <li class="tag-button">
                      <button>IT/기술</button>
                    </li>
                    <li class="tag-button">
                      <button>브랜딩</button>
                    </li>
                    <li class="tag-button">
                      <button>라이프스타일</button>
                    </li>
                    <li class="tag-button">
                      <button>UX/UI</button>
                    </li>
                    <li class="tag-button">
                      <button>노무</button>
                    </li>
                    <li class="tag-button">
                      <button>리더십</button>
                    </li>
                    <li class="tag-button">
                      <button>조직문화</button>
                    </li>
                    <li class="tag-button">
                      <button>한입콘텐츠</button>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <StartButton>원티드 시작하기</StartButton>
          </WrapperBodyContainer>
        </WrapperBody>
      </InterestBoxWrapper>
    </Base>
  );
}

export default InterestTag;
