import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/user";

const Base = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 105px;
  padding-bottom: 105px;
  background-color: #f8f8fa;
`;

const PositionBoxWrapper = styled.div`
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
  .body-container {
    padding: 29px 19px 24px;
  }
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
  .style-wrapper {
    position: relative;
    padding-bottom: 22px;
    color: #767676;
    box-sizing: border-box;
  }
  label {
    font-size: 14px;
    font-weight: 400;
  }
  .select-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 50px;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 5px;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    font-size: 15px;
    > select {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      padding-left: 15px;
      border: 0;
      appearance: none;
      background-color: transparent;
      color: #aaa;
    }
    [hidden] {
      display: none;
    }

    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
      width: 100%;
    }
  }
`;

const Footer = styled.div`
  margin-top: 18px;
  button {
    width: 100%;
    height: 54px;
    border-radius: 24px;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    display: flex;
    justify-content: center;
    color: #cacaca;
    cursor: pointer;
  }
  .active {
    background-color: #36f;
    color: #fff;
  }
  .disabled {
    background-color: #f2f4f7;
    border-color: transparent;
    color: #cacaca;
    cursor: not-allowed;
  }
`;

function Position() {
  const [user, setUser] = useRecoilState(userState);
  const [jobCategory, setJobCategory] = useState("");
  const [year, setYear] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f2f4f7");
  const navigate = useNavigate();
  const handleJobCategoryChange = (event) => {
    setJobCategory(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleClick = () => {
    if (jobCategory && year) {
      setUser({
        ...user,
        subGroup: jobCategory,
        workYear: year,
      });
      navigate("/signup/interest");
    }
    console.log(user);
  };

  useEffect(() => {
    if (jobCategory && year) {
      setBackgroundColor("#36f");
    } else {
      setBackgroundColor("#f2f4f7");
    }
  }, [jobCategory, year]);

  return (
    <Base>
      <PositionBoxWrapper>
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
                <span>???????????? ??????</span>
              </li>
              <li>
                <em>
                  <span>2</span>
                </em>
              </li>
              <li>
                <em>
                  <span>3</span>
                </em>
              </li>
            </ul>
          </div>
          <div className="body-container">
            <div className="title">
              <p>
                ?????? ?????? ?????? ?????????????
                <br />??? ?????? ????????? ???????????? ????????? ?????????!
              </p>
            </div>
            <div className="style-wrapper">
              <label>??????</label>
              <div style={{ marginTop: "11px" }}>
                <div className="select-wrapper">
                  <select
                    value={jobCategory}
                    onChange={handleJobCategoryChange}
                  >
                    <option value disabled hidden>
                      ??????????????????
                    </option>
                    <option value>??????????????????</option>
                    <option value="518">??????</option>
                  </select>
                </div>
              </div>
              <div
                className="level1-hint"
                style={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#aaa",
                  marginTop: "10px",
                }}
              >
                ????????? ??????, ?????? ????????? ??????????????????.
              </div>
              <div style={{ marginTop: "6px" }}></div>
            </div>

            <div className="style-wrapper">
              <label>??????</label>
              <div style={{ marginTop: "11px" }}>
                <div className="select-wrapper">
                  <select value={year} onChange={handleYearChange}>
                    <option value disabled hidden>
                      ??????????????????
                    </option>
                    <option value>??????????????????</option>
                    <option value="0">??????</option>
                  </select>
                </div>
              </div>
            </div>
            <Footer>
              <button
                type="button"
                onClick={handleClick}
                style={{ backgroundColor }}
              >
                ??????
              </button>
            </Footer>
          </div>
        </WrapperBody>
      </PositionBoxWrapper>
    </Base>
  );
}

export default Position;
