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

  const handleSubmit = async () => {
    await axios
      .post("https://prod.seolki.shop/users", {
        nickName: nickName,
        email: email,
        phoneNum: phoneNum,
        pwd: pwd,
        subGroup: subGroup,
        workYear: workYear,
        interestIdx: Number(interestIdx),
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.isSuccess === true) {
          alert("???????????? ??????");
          navigate("/");
        } else {
          alert("???????????? ??????");
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
                <span>???????????? ??????</span>
              </li>
            </ul>
          </div>
          <WrapperBodyContainer>
            <div className="title">
              <p>
                {nickName}?????? ???????????? ??????
                <br />
                ???????????? ????????? ????????????!
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
                      <span className="header-title">????????? ??????</span>
                    </div>
                  </li>

                  <ul style={{ marginBottom: "0" }}>
                    <li class="tag-button">
                      <button
                        onClick={() => handleTagClick(1)}
                        style={{ backgroundColor: buttonColor }}
                      >
                        ???????????????
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(2)}>
                        ??????/??????
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(3)}>
                        ????????????
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(4)}>
                        ????????????
                      </button>
                    </li>
                  </ul>
                  <li style={{ minWidth: "90%" }}>
                    <div className="header" style={{ marginBottom: "14px" }}>
                      <img
                        src="https://static.wanted.co.kr/images/tags/0a15b242.png"
                        alt=""
                      />
                      <span className="header-title">????????????</span>
                    </div>
                  </li>
                  <ul style={{ marginBottom: "0" }}>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(5)}>??????</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(6)}>?????????</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(7)}>HR</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(8)}>
                        ???????????????
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(9)}>?????????</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(10)}>?????????</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(11)}>
                        ??????/??????
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
                        ????????? ??????
                      </button>
                    </li>
                  </ul>
                  <li style={{ minWidth: "90%" }}>
                    <div className="header" style={{ marginBottom: "14px" }}>
                      <img
                        src="https://static.wanted.co.kr/images/tags/0a15b242.png"
                        alt=""
                      />
                      <span className="header-title">?????????/????????????</span>
                    </div>
                  </li>
                  <ul style={{ marginBottom: "0" }}>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(15)}>
                        IT/??????
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(16)}>?????????</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(17)}>
                        ??????????????????
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(18)}>UX/UI</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(19)}>??????</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(20)}>?????????</button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(21)}>
                        ????????????
                      </button>
                    </li>
                    <li class="tag-button">
                      <button onClick={() => handleTagClick(22)}>
                        ???????????????
                      </button>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <StartButton type="submit" onClick={handleSubmit}>
              ????????? ????????????
            </StartButton>
          </WrapperBodyContainer>
        </WrapperBody>
      </InterestBoxWrapper>
    </Base>
  );
}

export default InterestTag;
