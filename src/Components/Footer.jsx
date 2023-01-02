import React from "react";
import styled from "styled-components";

const Base = styled.footer`
  display: block;
  padding: 18px 0 65px;
  background-color: #fff;
  border-top: 1px solid #ececec;
  box-sizing: border-box;
  width: 100%;
  height: 245px;
  bottom: 0;
`;

const Container = styled.section`
  padding: 0px 207px 81px 207px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0px;
  box-sizing: border-box;
  width: 597px;
  button {
    cursor: pointer;
    background: white;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 0px;
  box-sizing: border-box;

  select {
    background-color: #f1f4f7;
    width: 251px;
    height: 39px;
    border: none;
    border-radius: 5px;
    padding: 10px;
  }
`;

function Footer() {
  return (
    <Base>
      <Container>
        <Row style={{ borderBottom: "#dddddd 1px solid" }}>
          <Left style={{ whiteSpace: "nowrap" }}>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt=""
            />
            <button>기업소개</button>
            <button>이용약관</button>
            <button>개인정보 처리방침</button>
            <button>고객센터</button>
          </Left>
          <Right style={{ width: "257px" }}>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
              alt="instagram"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
              alt="youtube"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
              alt="facebook"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
              alt="blog"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100"
              alt="kakao"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"
              alt="naverpost"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
              alt="appstore"
            />
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
              alt="playstore"
            />
          </Right>
        </Row>
        <Row>
          <Left
            style={{ fontSize: "12px", color: "#818181", lineHeight: "1.5" }}
          >
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            사업자등록번호 : 299-86-00021 | 02-539-7118 © Wantedlab, Inc.
          </Left>
          <Right>
            <select>
              <option>한국(한국어)</option>
              <option>일본(일본어)</option>
              <option>Wordwide(English)</option>
              <option>Singapore(English)</option>
            </select>
          </Right>
        </Row>
      </Container>
    </Base>
  );
}

export default Footer;
