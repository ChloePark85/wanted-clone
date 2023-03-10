import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../recoil/user";

const Base = styled.div`
  background-color: #f7f7f7;
  padding: 51px 0px;
`;
const SignupBox = styled.div`
  border: #dddddd 1px solid;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 689px;
  background-color: white;
  left: 529px;
  box-sizing: border-box;
  word-break: keep-all;
  overflow-wrap: anywhere;
  padding: 26px 0px;
  overflow: auto;
  max-height: calc(100vh - 100px);
`;

const TitleSection = styled.div`
  padding: 0 20px;
  height: 64px;
  display: flex;
  width: 358px;
  flex-direction: row;
  justify-content: space-around;

  .cancel {
    width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 17px;
    > button {
      border: none;
      background: none;
      cursor: pointer;
      padding: 8px;
      margin: -8px;
      fill: black;
      width: 80px;
      height: 76px;

      > p {
        text-align: center;
        justify-content: flex-start;
        align-items: center;
        font-weight: 400;
        font-size: 17px;
        display: flex;
        min-width: 14px;
      }
    }
  }
  .signup {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 230px;
    > p {
      text-align: center;
      display: flex;
      flex: 1 1 0%;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
  }
  .empty {
    display: flex;
    width: 64px;
    justify-content: flex-end;
    align-items: center;
  }
`;

const FormSection = styled.div`
  overflow: auto;
  position: relative;
  padding: 20px;
  width: 358px;
  .form-label {
    margin: 17px 0px 7px;
    word-break: keep-all;
    overflow-wrap: anywhere;
    > label {
      color: #888;
      font-weight: 600;
      text-align: left;
      font-size: 14px;
      line-height: 20px;
    }
  }
  input,
  select {
    width: 100%;
    height: 50px;
    min-height: 50px;
    padding: 0px 12px;
    outline: none;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    box-sizing: border-box;
  }
  .request-verification {
    border: 1px solid #f2f4f7;
    height: 50px;
    min-height: 50px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 0px 15px;
    width: auto;
    flex: 0 0 auto;
    border-radius: 5px;
  }
  .request-verification .disabled {
    color: #ccc;
    background-color: #f2f4f7;
    cursor: default;
  }
  p {
    color: #888;
    font-weight: 400;
    text-align: left;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 10px;
    margin-top: 0px;
  }
  .submit-button {
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
  .submit-button:disabled {
    color: #ccc;
    background-color: #f2f4f7;
    border: none;
    cursor: default;
  }
`;

const CheckboxSection = styled.div`
  .check-agree {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    min-height: 25px;
    width: 100%;
  }
  .check-box {
    width: 18px;
    height: 18px;
    border-radius: 3px;
    border: 1px solid #ececec;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  input {
    opacity: 0;
    width: calc(100% - 90px);
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
  .marketing-agree {
    display: flex;
    margin-left: 28px;
    > label {
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 18px;
      cursor: pointer;
    }
  }
`;

function Signup() {
  const userEmail = useRecoilValue(userState).email;
  const [user, setUser] = useRecoilState(userState);
  console.log(userEmail);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch());
  const navigate = useNavigate();

  const onValid = (data) => {
    console.log(data);
  };
  const nickName = watch("nickName");
  const phoneNum = watch("phoneNum");
  const pwd = watch("pwd");
  const pwdconfirm = watch("pwdconfirm");

  const handleNextClick = () => {
    if (nickName && phoneNum && pwd && pwdconfirm) {
      setUser({
        ...user,
        nickName: nickName,
        phoneNum: phoneNum,
        pwd: pwd,
      });
      navigate("/signup/position");
    } else {
      alert("?????? ????????? ??????????????????");
    }
  };

  return (
    <Base>
      <SignupBox>
        <TitleSection>
          <div class="cancel">
            <button>
              <p>??????</p>
            </button>
          </div>
          <div class="signup">
            <p>????????????</p>
          </div>
          <div class="empty"></div>
        </TitleSection>
        <FormSection>
          <form
            onSubmit={handleSubmit(onValid)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div class="form-label">
              <label>?????????</label>
            </div>
            <input type="email" defaultValue={userEmail} disabled />
            <div class="form-label">
              <label>??????</label>
            </div>
            <input
              type="text"
              placeholder="????????? ??????????????????."
              {...register("nickName", { required: true })}
            />
            <div class="form-label">
              <label>????????? ??????</label>
            </div>
            <select>
              <option value="KR">South Korea +82</option>
              <option value="JP">Japan +81</option>
            </select>
            <div
              class="phone-number"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <span
                style={{
                  color: "#fe415c",
                  fontSize: "13px",
                  marginTop: "2px",
                  lineHeight: "18px",
                  textAlign: "left",
                }}
              >
                {errors?.phoneNum?.message}
              </span>
              <input
                type="number"
                style={{ width: "229px" }}
                placeholder="(??????) 01013245768"
                {...register("phoneNum", {
                  required: true,
                  pattern: {
                    value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                    message: "????????? ??????????????? ??????????????????.",
                  },
                })}
              />
              <button class="request-verification" disabled>
                ???????????? ??????
              </button>
            </div>
            <input
              type="number"
              placeholder="??????????????? ??????????????????."
              disabled
            />
            <div class="form-label">
              <label>????????????</label>
            </div>
            <input
              type="number"
              placeholder="??????????????? ??????????????????."
              {...register("pwd", { required: true })}
            />
            {errors.password && <span>???????????? ?????? ?????????????????????.</span>}
            <input
              type="number"
              placeholder="??????????????? ?????? ?????? ??????????????????."
              {...register("pwdconfirm", { required: true })}
            />
            {errors.pwd && <span>???????????? ?????? ?????????????????????.</span>}
            <p>
              ?????? ????????????, ??????, ??????????????? 3?????? ???????????? ????????? 8??? ??????
              16??? ????????? ??????????????????.
            </p>

            <CheckboxSection>
              <div class="check-agree" style={{ margin: "28px 0px 10px" }}>
                <div class="check-box"></div>
                <input type="checkbox"></input>
                <div style={{ display: "flex", flex: "1 1 0%" }}>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px 0px 0px 7px",
                      color: "#333",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    ?????? ??????
                  </p>
                </div>
              </div>
              <hr
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  width: "100%",
                  borderBottom: "1px solid #e1e2e3",
                }}
              />
              <div class="check-agree" style={{ margin: "10px 0px" }}>
                <div class="check-box"></div>
                <input type="checkbox"></input>
                <div style={{ display: "flex", flex: "1 1 0%" }}>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px 0px 0px 7px",
                      color: "#888",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    ??? 14??? ???????????????. (??????)
                  </p>
                </div>
              </div>
              <div class="check-agree" style={{ margin: "10px 0px" }}>
                <div class="check-box"></div>
                <input type="checkbox"></input>
                <div style={{ display: "flex", flex: "1 1 0%" }}>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px 0px 0px 7px",
                      color: "#888",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    OneID ??? ????????? ???????????? ?????? (??????)
                  </p>
                </div>
              </div>
              <div class="check-agree" style={{ margin: "10px 0px" }}>
                <div class="check-box"></div>
                <input type="checkbox"></input>
                <div style={{ display: "flex", flex: "1 1 0%" }}>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px 0px 0px 7px",
                      color: "#888",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    OneID ??? ???????????? ?????? ??? ?????? ?????? (??????)
                  </p>
                </div>
              </div>
              <div class="check-agree" style={{ margin: "10px 0px" }}>
                <div class="check-box"></div>
                <input type="checkbox"></input>
                <div style={{ display: "flex", flex: "1 1 0%" }}>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px 0px 0px 7px",
                      color: "#888",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    ????????? ???????????? ?????? ??? ?????? ?????? (??????)
                  </p>
                </div>
              </div>
              <div class="check-agree" style={{ margin: "10px 0px" }}>
                <div class="check-box"></div>
                <input type="checkbox"></input>
                <div style={{ display: "flex", flex: "1 1 0%" }}>
                  <p
                    style={{
                      textAlign: "left",
                      margin: "0px 0px 0px 7px",
                      color: "#888",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    ?????? ??????, ????????? ?????????, ????????? ??? ????????? ?????? ?????? ??????
                  </p>
                </div>
              </div>
              <div class="marketing-agree">
                <label>
                  <span>?????????</span>
                </label>
                <label>
                  <span>??? ??????</span>
                </label>
                <label>
                  <span>?????? ?????????</span>
                </label>
              </div>
            </CheckboxSection>
            <button
              class="submit-button"
              type="submit"
              onClick={handleNextClick}
              style={{
                backgroundColor:
                  nickName && phoneNum && pwd && pwdconfirm ? "#36f" : "#ddd",
              }}
            >
              ????????????
            </button>
          </form>
        </FormSection>
      </SignupBox>
    </Base>
  );
}

export default Signup;
