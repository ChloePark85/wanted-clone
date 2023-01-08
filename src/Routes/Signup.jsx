import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

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

function Signup({ email }) {
  const [isValid, setIsValid] = useState(false);
  const validateInput = () => {
    if (email && name && phoneNumber && password && passwordConfirm) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch());
  const onValid = (data) => {
    console.log(data);
  };
  const name = watch("name");
  const phoneNumber = watch("phoneNumber");
  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");

  const navigate = useNavigate();

  const handleNext = () => {
    if (isValid) {
      navigate("/signup/position");
    }
  };
  // const { id } = useParams();
  // const { state } = useLocation();
  // console.log(id);
  // console.log(state);

  return (
    <Base>
      <SignupBox>
        <TitleSection>
          <div class="cancel">
            <button>
              <p>취소</p>
            </button>
          </div>
          <div class="signup">
            <p>회원가입</p>
          </div>
          <div class="empty"></div>
        </TitleSection>
        <FormSection>
          <form
            onSubmit={handleSubmit(onValid)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div class="form-label">
              <label>이메일</label>
            </div>
            <input type="email" value={email} disabled />
            <div class="form-label">
              <label>이름</label>
            </div>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              value={name}
              onChange={(e) => validateInput()}
              {...register("name", { required: true })}
            />
            <div class="form-label">
              <label>휴대폰 번호</label>
            </div>
            <select>
              <option value="KR">South Korea +82</option>
              <option value="JP">Japan +81</option>
            </select>
            <div
              class="phone-number"
              value={phoneNumber}
              onChange={(e) => validateInput()}
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
                {errors?.phoneNumber?.message}
              </span>
              <input
                type="number"
                style={{ width: "229px" }}
                placeholder="(예시) 01013245768"
                {...register("phoneNumber", {
                  required: true,
                  pattern: {
                    value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
                    message: "올바른 전화번호를 입력해주세요.",
                  },
                })}
              />
              <button class="request-verification" disabled>
                인증번호 받기
              </button>
            </div>
            <input
              type="number"
              placeholder="인증번호를 입력해주세요."
              {...register("verficationnumber", { required: false })}
              disabled
            />
            <div class="form-label">
              <label>비밀번호</label>
            </div>
            <input
              type="number"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => validateInput()}
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && <span>올바르지 않은 비밀번호입니다.</span>}
            <input
              type="number"
              placeholder="비밀번호를 다시 한번 입력해주세요."
              value={passwordConfirm}
              onChange={(e) => validateInput()}
              {...register("passwordConfirm", { required: true, minLength: 8 })}
            />
            {errors.password && <span>올바르지 않은 비밀번호입니다.</span>}
            <p>
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
              16자 이하로 입력해주세요.
            </p>
          </form>

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
                  전체 동의
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
                  만 14세 이상입니다. (필수)
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
                  OneID 및 원티드 이용약관 동의 (필수)
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
                  OneID 및 개인정보 수집 및 이용 동의 (필수)
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
                  원티드 개인정보 수집 및 이용 동의 (필수)
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
                  채용 소식, 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기
                </p>
              </div>
            </div>
            <div class="marketing-agree">
              <label>
                <span>이메일</span>
              </label>
              <label>
                <span>앱 푸시</span>
              </label>
              <label>
                <span>문자 메시지</span>
              </label>
            </div>
          </CheckboxSection>
          <button
            class="submit-button"
            type="submit"
            onClick={handleNext}
            style={{
              backgroundColor:
                name && phoneNumber && password && passwordConfirm
                  ? "#36f"
                  : "#ddd",
            }}
          >
            가입하기
          </button>
        </FormSection>
      </SignupBox>
    </Base>
  );
}

export default Signup;
