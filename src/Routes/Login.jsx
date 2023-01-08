import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Password from "./Password";
import Signup from "./Signup";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../recoil/user";

const Base = styled.div`
  background-color: #f7f7f7;
  padding: 51px 0px;
`;

const LoginBox = styled.div`
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
  padding: 26px 20px;
  overflow: auto;
  max-height: calc(100vh - 100px);

  h1 {
    font-size: 28px;
    font-weight: 700;
    text-align: center;
    line-height: 38px;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  h2 {
    font-size: 15px;
    color: #888;
    text-align: center;
    display: block;
    line-height: 22px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  label {
    color: #888;
    font-weight: 600;
    text-align: left;
    font-size: 14px;
    line-height: 20px;
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
    box-sizing: border-box;
    text-align: start;
    text-rendering: auto;
    appearance: auto;
    cursor: text;
    margin: 0em;
  }
  button {
    color: #ccc;
    border: none;
    cursor: default;
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 30px;
    box-sizing: border-box;
  }
  p {
    color: #939393;
    font-weight: 600;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 12px;
    line-height: 16px;
    display: block;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  hr {
    border: none;
    width: 100%;
    border-bottom: 1px solid #dddddd;
    margin-top: 40px;
    margin-bottom: 40px;
    box-sizing: border-box;
    display: block;
  }
  select {
    width: 140px;
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: black;
    width: 144px;
    height: 32px;
    padding-left: 45px;
    border-radius: 5px;
    border: #dddddd 1px solid;
  }
`;

const LogoContainer = styled.div`
  padding: 0 20px;
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  img {
    display: flex;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    width: 141px;
    height: 20px;
  }
`;

const SocialLoginBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 360px;
  justify-content: center;
  box-sizing: border-box;
  word-break: keep-all;
  overflow-wrap: anywhere;
  button {
    flex: 1;
    margin: 0;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0px;
    box-sizing: border-box;
    width: 358px;
    height: 78px;
  }
  svg {
    width: 56px;
    height: 56px;
    user-select: none;
    fill: currentColor;
    flex-shrink: 0;
    font-size: inherit;
    box-sizing: border-box;
  }
  p {
    word-break: keep-all;
    overflow-wrap: anywhere;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const Footer = styled.div`
  margin: 0px auto 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  word-break: keep-all;
  overflow-wrap: anywhere;
  span {
    color: #767676;
    font-weight: 600;
    text-align: center;
    box-sizing: border-box;
    font-size: 13px;
    line-height: 18px;
  }
`;

function Login(props) {
  const [user, setUser] = useRecoilState(userState);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch());
  const onValid = (data) => {
    console.log(data);
    setUser({ ...user, email: data.email });
  };
  // const [checkEmail, setCheckEmail] = useState();
  // const handleLogin = async (email) => {
  //   const result = await axios({
  //     method: "GET",
  //     url: "https://prod.seolki.shop/users/sign-up",
  // headers: { "Content-Type": "application/json" },
  // data: { email: email },
  // dataType: "json",
  //   });
  //   setCheckEmail(result.data.result);
  //   console.log(checkEmail);
  // };
  const [backgroundColor, setBackgroundColor] = useState("#f2f4f7");
  const email = watch("email");

  useEffect(() => {
    if (email && !errors.email) {
      setBackgroundColor("#36f");
    } else {
      setBackgroundColor("#f2f4f7");
    }
  }, [email, errors.email]);

  // const handleSubmitEmail = (e) => {
  //   e.preventDefault();
  // handleLogin(email);
  //   setInputEmail(email);
  // };
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    const result = await axios({
      method: "GET",
      url: "https://prod.seolki.shop/users/sign-in",
      headers: { "Content-Type": "application/json" },
      data: { email: data.email },
      dataType: "json",
    });
    console.log(result.data.result);
    if (result.data.result === "0") {
      navigate("/signup");
    } else {
      navigate(`/login/${data.email}`);
    }
  };

  return (
    <Base>
      <LoginBox>
        <LogoContainer>
          <img src="https://ifh.cc/g/BggbDk.png" alt="login-logo" />
        </LogoContainer>
        <h1>
          하나의 계정으로
          <br />
          더욱 편리하게
        </h1>
        <h2>
          원티드가 제공하는 서비스를
          <br />
          하나의 계정으로 모두 이용할 수 있습니다.
        </h2>
        <label>이메일</label>
        <form
          onSubmit={handleSubmit(onValid)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            placeholder="이메일을 입력해주세요."
            {...register("email", {
              required: true,
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "올바른 이메일을 입력해주세요.",
              },
            })}
          />
          <span
            style={{
              color: "#fe415c",
              fontSize: "13px",
              marginTop: "2px",
              lineHeight: "18px",
              textAlign: "left",
            }}
          >
            {errors?.email?.message}
          </span>
          <button
            style={{ backgroundColor: backgroundColor }}
            onClick={handleLogin}
          >
            이메일로 계속하기
          </button>
        </form>
        <p>또는</p>
        <SocialLoginBox>
          <button>
            <span>
              <svg viewBox="0 0 57 56">
                <path
                  d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                  fill="black"
                ></path>
                <path
                  d="M28.8182 19.359C30.0068 19.359 31.4968 18.5307 32.384 17.4264C33.1876 16.4256 33.7736 15.0279 33.7736 13.6302C33.7736 13.4404 33.7568 13.2506 33.7233 13.0953C32.4008 13.147 30.8104 14.0098 29.8561 15.1659C29.1028 16.046 28.4164 17.4264 28.4164 18.8413C28.4164 19.0484 28.4499 19.2555 28.4666 19.3245C28.5503 19.3418 28.6843 19.359 28.8182 19.359ZM24.6329 40.2381C26.2568 40.2381 26.9767 39.1165 29.0023 39.1165C31.0615 39.1165 31.5135 40.2036 33.3215 40.2036C35.0961 40.2036 36.2847 38.5126 37.4064 36.8561C38.6619 34.958 39.1809 33.0944 39.2144 33.0081C39.0972 32.9736 35.6988 31.5414 35.6988 27.5209C35.6988 24.0352 38.3773 22.465 38.528 22.3442C36.7535 19.7214 34.0581 19.6524 33.3215 19.6524C31.3294 19.6524 29.7055 20.8947 28.6843 20.8947C27.5794 20.8947 26.1229 19.7214 24.3986 19.7214C21.1173 19.7214 17.7858 22.5168 17.7858 27.7969C17.7858 31.0755 19.0247 34.5438 20.5481 36.787C21.8539 38.6851 22.9923 40.2381 24.6329 40.2381Z"
                  fill="white"
                ></path>
              </svg>
            </span>
            <p>Apple</p>
          </button>
          <button>
            <span>
              <svg viewBox="0 0 57 56">
                <path
                  d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                  fill="#1877F2"
                ></path>
                <path
                  d="M28.5 14.2855C20.9256 14.2855 14.7857 20.4253 14.7857 27.9997C14.7857 34.8445 19.801 40.5181 26.3578 41.5467V31.9645H22.8744V27.9997H26.3578V24.9785C26.3578 21.5417 28.404 19.6423 31.5377 19.6423C33.038 19.6423 34.607 19.9111 34.607 19.9111V23.2848H32.8776C31.1743 23.2848 30.6422 24.3421 30.6422 25.4269V27.9997H34.4465L33.839 31.9645H30.6422V41.5467C37.199 40.5181 42.2143 34.8445 42.2143 27.9997C42.2143 20.4253 36.0744 14.2855 28.5 14.2855Z"
                  fill="#fff"
                ></path>
              </svg>
            </span>
            <p>Facebook</p>
          </button>
          <button>
            <span>
              <svg
                viewBox="0 0 57 56"
                style={{ border: "1px solid #dddddd", borderRadius: "50px" }}
              >
                <path
                  d="M41.6657 28.3122C41.6657 27.34 41.5789 26.4044 41.4158 25.5068H28.5V30.8112H35.8813C35.5629 32.5255 34.5968 33.9792 33.1446 34.9514V38.3922H37.5758C40.1693 36.0044 41.6657 32.4889 41.6657 28.3122Z"
                  fill="#3D82F0"
                ></path>
                <path
                  d="M28.5003 41.7146C32.2032 41.7146 35.3072 40.4864 37.5761 38.3927L33.1449 34.9504C31.9167 35.7733 30.3457 36.2594 28.5003 36.2594C24.9285 36.2594 21.9053 33.8472 20.8264 30.606H16.2443V34.1595C18.5011 38.6411 23.1396 41.7146 28.5003 41.7146Z"
                  fill="#31A752"
                ></path>
                <path
                  d="M20.8261 30.606C20.5518 29.7831 20.3964 28.9039 20.3964 28.0002C20.3964 27.0966 20.5518 26.2174 20.8261 25.3945V21.841H16.244C15.316 23.6924 14.7857 25.7877 14.7857 28.0002C14.7857 30.2128 15.316 32.3081 16.244 34.1595L20.8261 30.606Z"
                  fill="#F9BA00"
                ></path>
                <path
                  d="M28.5003 19.7407C30.5133 19.7407 32.322 20.4325 33.7422 21.7917L37.6767 17.8588C35.3011 15.6447 32.1971 14.2855 28.5003 14.2855C23.1396 14.2855 18.5011 17.359 16.2443 21.842L20.8264 25.394C21.9053 22.1529 24.9285 19.7407 28.5003 19.7407Z"
                  fill="#E64234"
                ></path>
              </svg>
            </span>
            <p>Google</p>
          </button>
          <button>
            <span>
              <svg viewBox="0 0 57 56">
                <path
                  d="M0.5 28C0.5 12.536 13.036 0 28.5 0C43.964 0 56.5 12.536 56.5 28C56.5 43.464 43.964 56 28.5 56C13.036 56 0.5 43.464 0.5 28Z"
                  fill="#FEE500"
                ></path>
                <path
                  d="M28.5 16.2063C21.5606 16.2063 15.9286 20.5812 15.9286 25.9617C15.9286 29.3183 18.1034 32.2474 21.4223 34.0326L20.0269 39.1492C20.0005 39.2509 20.006 39.3583 20.0424 39.4569C20.0788 39.5555 20.1446 39.6406 20.2307 39.7008C20.3169 39.761 20.4195 39.7934 20.5246 39.7937C20.6297 39.7939 20.7324 39.7621 20.8189 39.7023L26.9286 35.6417C27.444 35.6417 27.972 35.7297 28.5 35.7297C35.4394 35.7297 41.0714 31.3549 41.0714 25.9617C41.0714 20.5686 35.4394 16.2063 28.5 16.2063Z"
                  fill="#181600"
                ></path>
              </svg>
            </span>
            <p>Kakao</p>
          </button>
        </SocialLoginBox>
        <hr />
        <Footer>
          <span style={{ marginRight: "12px" }}>이용약관</span>
          <span>개인정보처리방침</span>
        </Footer>
        <p>© Wantedlab, Inc.</p>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <select>
            <option>한국어</option>
            <option>일본어</option>
            <option>English</option>
          </select>
        </div>
      </LoginBox>
    </Base>
  );
}

export default Login;
