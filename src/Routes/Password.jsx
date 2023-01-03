import React from "react";
import styled from "styled-components";

const Base = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #f7f7f7;
`;

const PasswordBoxSection = styled.div`
  max-width: 400px;
  width: 100%;
  height: 368px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
`;

const PasswordBox = styled.div`
  border-radius: 5px;
  width: 100%;
  max-height: calc(100vh-100px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: #e1e2e3;
  .header {
    padding: 0 20px;
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
  input {
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
`;

function Password() {
  return (
    <Base>
      {" "}
      <PasswordBoxSection>
        <PasswordBox>
          <div class="header">
            <div class="back-butto-box">
              <button class="back-button"></button>
              <div class="title">
                <p>이메일로 로그인</p>
              </div>
              <div class="empty"></div>
            </div>
          </div>
          <BodyContainer>
            <form>
              <div class="label-container">
                <label>비밀번호</label>
              </div>
              <input placeholder="비밀번호를 입력해주세요."></input>
            </form>
          </BodyContainer>
        </PasswordBox>
      </PasswordBoxSection>
    </Base>
  );
}

export default Password;
