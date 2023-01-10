import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../recoil/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Base = styled.div`
  background-color: #f7f7f7;
  padding: 236px 0px;
`;

const PasswordBoxSection = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  box-sizing: border-box;
`;

const PasswordBox = styled.div`
  max-width: 400px;
  border-radius: 5px;
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #e1e2e3;
  .header {
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .back-button-box {
    min-width: 64px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 400;
    font-size: 17px;
  }
  .back-button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 8px;
    margin: -8px;
  }
  .title {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .title > p {
    color: #000;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    display: flex;
    flex: 1 1 0%;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.002em;
  }
  .empty {
    display: flex;
    min-width: 64px;
    justify-content: flex-end;
    align-items: center;
  }
`;

const BodyContainer = styled.div`
  overflow: auto;
  position: relative;
  padding: 20px;
  form {
    display: block;
    margin-top: 0em;
    padding: 0 20px 0 0;
    > input {
      width: 100%;
      height: 50px;
      min-height: 50px;
      padding: 0px 12px;
      outline: none;
      background-color: transparent;
      border: 1px solid #e1e2e3;
      color: #333;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 8px;
    }
  }
  .label-container {
    margin: 17px 0px 7px;
  }
  label {
    color: #888;
    font-weight: 600;
    text-align: left;
    font-size: 14px;
    line-height: 18px;
  }
  .next-button {
    color: #ccc;
    background: #f2f4f7;
    border: none;
    cursor: default;
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 30px;
  }
  .password-reset-button {
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    border: none;
    background: none;
    border: none;
    > span {
      color: #36f;
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      line-height: 20px;
    }
  }
`;

function Password() {
  const [user, setUser] = useRecoilState(userState);
  const email = useRecoilValue(userState).email;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch());
  const [password, setPassword] = useState("");
  const [nextButtonColor, setNextButtonColor] = useState("#f2f4f7");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 0) {
      setNextButtonColor("#36f");
    } else {
      setNextButtonColor("#f2f4f7");
    }
  };
  const navigate = useNavigate();
  const onValid = (data) => {
    console.log(data);
    setUser({ ...user, pwd: data.password });
    // if (data.password && !errors.password) {
    axios
      .post("https://prod.seolki.shop/users/login", {
        email: email,
        pwd: data.pwd,
        // body: {

        // },
      })
      .then((response) => {
        console.log(response);
        if (response.data.isSuccess) {
          setUser({ ...user, isLogin: true });
          navigate("/");
        } else {
          alert("로그인 실패");
        }
      });
    // }
  };

  console.log(email);
  console.log(password);

  return (
    <Base>
      <PasswordBoxSection>
        <PasswordBox>
          <div class="header">
            <button class="back-button-box">
              <IoIosArrowBack />
            </button>

            <div class="title">
              <p>이메일로 로그인</p>
            </div>
            <div class="empty"></div>
          </div>
          <BodyContainer>
            <div class="label-container">
              <label>비밀번호</label>
            </div>
            <form onSubmit={handleSubmit(onValid)}>
              <input
                {...register("pwd", {
                  required: true,
                })}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력해주세요."
              ></input>

              <button
                class="next-button"
                type="submit"
                style={{ backgroundColor: nextButtonColor }}
              >
                다음
              </button>
            </form>
            <button class="password-reset-button" type="submit">
              <span>비밀번호 초기화/변경</span>
            </button>
          </BodyContainer>
        </PasswordBox>
      </PasswordBoxSection>
    </Base>
  );
}

export default Password;
