import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";

const Base = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 1060px;
  padding: 0 0 90px;
`;

const Title = styled.h2`
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
`;

function MyPage() {
  return (
    <>
      <Header />
      <Base>
        <Title>MY 원티드</Title>
        <Container>
          <aside className="aside">
            <div className="aside-contents">
              <div className="aside-profile" style={{ border: "none" }}>
                <div
                  className="aside-profile__image"
                  style={{
                    backgroundImage:
                      "https://static.wanted.co.kr/oneid-user/profile_default.png",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="aside-banner"></div>
          </aside>
        </Container>
      </Base>
    </>
  );
}

export default MyPage;
