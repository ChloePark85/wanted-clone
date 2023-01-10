import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/user";

const Base = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 1060px;
  padding: 0 0 90px;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  padding: 100px 0 20px;
`;

const Container = styled.div`
  position: relative;
  aside {
    top: 0;
    left: 0;
    width: 250px;
    position: absolute;
  }
  .aside-contents {
    background: #fff;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
  }
  .aside-banner {
    width: 250px;
    margin-top: 20px;
  }
  .aside-profile {
    border: none;
    padding: 42px 20px 30px;
    text-align: center;
  }
  .aside-profile-img {
    display: inline-block;
    position: relative;
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background-size: cover;
    background-position: 50%;
  }
  .aside-point {
    border-top: 1px solid #e1e2e3;
    padding: 30px 20px;
  }
  .aside-matchup {
    border-top: 1px solid #e1e2e3;
  }
  .aside-setting {
    border-top: 1px solid #e1e2e3;
    padding: 30px 20px;
  }
  .summary {
    background: #fff;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
    margin: 0 0 20px;
    padding: 26px 0 34px;
    height: 111px;
    h2 {
      font-size: 18px;
      padding: 0 32px 26px;
      font-weight: 700;
    }
    li {
      float: left;
      width: 25%;
      em {
        font-weight: 400;
        font-size: 36px;
        line-height: 1;
        padding-bottom: 11px;
        font-style: normal;
      }
      span {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }

  .body-contents {
    background: #fff;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
  }
`;

function MyPage() {
  const nickName = useRecoilValue(userState).nickName;
  const email = useRecoilValue(userState).email;
  return (
    <div>
      <Header />
      <Base>
        <Title>MY 원티드</Title>
        <Container>
          <aside className="aside">
            <div className="aside-contents">
              <div className="aside-profile">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"
                  className="aside-profile-img"
                  alt=""
                />
                <div style={{ width: "100%", paddingTop: "30px" }}>
                  <div
                    className="name"
                    style={{ fontSize: "18px", fontWeight: "700" }}
                  >
                    {nickName}
                  </div>
                  <div
                    className="email"
                    style={{
                      paddingTop: "20px",
                      fontSize: "14px",
                      color: "#767676",
                    }}
                  >
                    {email}
                  </div>
                  <div style={{ fontSize: "14px", paddingTop: "8px" }}>-</div>
                </div>
              </div>
              <div className="aside-point"></div>
              <div className="aside-matchup"></div>
              <div className="aside-setting"></div>
            </div>
            <div className="aside-banner"></div>
          </aside>
          <section className="body" style={{ paddingLeft: "270px" }}>
            <div className="summary">
              <h2 className="summary-title">지원현황</h2>
              <ul className="summary-status">
                <li style={{ border: "none" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <em>0</em>
                    <span>지원 완료</span>
                  </div>
                </li>
                <li>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <em>0</em>
                    <span>서류 통과</span>
                  </div>
                </li>
                <li>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <em>0</em>
                    <span>최종 합격</span>
                  </div>
                </li>
                <li>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <em>0</em>
                    <span>불합격</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="level" style={{ display: "block" }}></div>
            <div className="body-contents"></div>
          </section>
        </Container>
      </Base>
    </div>
  );
}

export default MyPage;
