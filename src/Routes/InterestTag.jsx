import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../recoil/user";

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
  const [user, setUser] = useRecoilState(userState);
  const [interestIdx, setInterestIdx] = useRecoilState(userState);
  const [buttonColor, setButtonColor] = useState("f1f4f7");
  const nickName = useRecoilValue(userState).nickName;
  const email = useRecoilValue(userState).email;
  const phoneNum = useRecoilValue(userState).phoneNum;
  const pwd = useRecoilValue(userState).pwd;
  const subGroup = useRecoilValue(userState).subGroup;
  const workYear = useRecoilValue(userState).workYear;

  const handleTagClick = (interestIdx) => {
    setInterestIdx(interestIdx);
    setUser({
      ...user,
      interestIdx: interestIdx,
      isLogin: true,
    });
    setButtonColor("#36f");
  };
  console.log(interestIdx);

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("https://prod.seolki.shop/users", {
        data: {
          nickName,
          email,
          phoneNum,
          pwd,
          subGroup,
          workYear,
          interestIdx,
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isSuccess === true) {
          alert("회원가입 성공");
          navigate("/");
        } else {
          alert("회원가입 실패");
        }
      });
  };

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
                {nickName}님의 커리어를 위한
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
                      <button
                        onClick={() => handleTagClick(1)}
                        style={{ backgroundColor: buttonColor }}
                      >
                        커리어고민
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(2)}>
                        취업/이직
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(3)}>
                        회사생활
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(4)}>
                        인간관계
                      </button>
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
                      <button onClick={() => handleTagClick(5)}>개발</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(6)}>데이터</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(7)}>HR</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(8)}>
                        서비스기획
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(9)}>마케팅</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(10)}>디자인</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(11)}>
                        경영/전략
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(12)}>CS/CX</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(13)}>MD</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(14)}>
                        콘텐츠 제작
                      </button>
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
                      <button onClick={() => handleTagClick(15)}>
                        IT/기술
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(16)}>브랜딩</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(17)}>
                        라이프스타일
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(18)}>UX/UI</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(19)}>노무</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(20)}>리더십</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(21)}>
                        조직문화
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(22)}>
                        한입콘텐츠
                      </button>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <StartButton onClick={handleSubmit}>원티드 시작하기</StartButton>
          </WrapperBodyContainer>
        </WrapperBody>
      </InterestBoxWrapper>
    </Base>
  );
}

export default InterestTag;
