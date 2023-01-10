import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil/user";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const JobDetailSection = styled.div`
  background-color: #fff;
  .content-left {
    display: inline-block;
    width: calc(100% - 36px);
    vertical-align: top;
    margin: 0 200px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 4px;
      -o-object-fit: cover;
      object-fit: cover;
      outline: 1px solid rgba(0, 0, 0, 0.05);
      outline-offset: -1px;
    }
    .job-header {
      margin: 40px 0 30px;
    }
  }
  .jobprocess-container {
    top: 100px;
    position: fixed;
    right: 5%;
    width: 340px;
    margin: 0 180px;
  }
  .beforeApplication-container {
    header {
      width: 340px;
      border: 1px solid #e1e2e3;
      background-color: #fff;
      padding: 24px 20px;
      border-radius: 3px;
    }
    footer {
      margin-top: 10px;
    }
    .bookmark-btn {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: center;
      width: 100%;
      height: 50px;
      border-radius: 25px;
      background-color: #fff;
      border: 1px solid #36f;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: normal;
      color: #36f;
      text-align: center;
    }
    .applybtn-container {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
    .applybtn {
      width: 100%;
      height: 50px;
      border-radius: 25px;
      background-color: #36f;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: normal;
      color: #fff;
      text-align: center;
    }
    .reward-header {
      font-size: 15px;
      font-weight: 600;
      letter-spacing: normal;
      text-align: left;
      color: #333;
    }
    ul {
      overflow: hidden;
      margin: 24px 0;
    }
    .share-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 20px;
      border: 1px solid #e1e2e3;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .left {
      float: left;
      width: 50%;
      letter-spacing: normal;
      text-align: left;
    }
    .right {
      float: left;
      width: 50%;
      letter-spacing: normal;
      text-align: left;
    }
  }
`;

function JobDetail() {
  const loggedIn = useRecoilValue(userState).isLogin;
  const navigate = useNavigate();
  const handleBookmarkClick = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      alert("북마크 되었습니다.");
    }
  };
  const { id } = useParams();
  const { state } = useLocation();
  console.log(id);
  console.log(state);
  return (
    <>
      <Header />
      <div style={{ padding: "50px" }} />
      <JobDetailSection>
        <div className="content-wrapper" style={{ maxWidth: "1060px" }}>
          <div className="relative-wrapper" style={{ position: "relative" }}>
            <div className="content-left">
              <section
                className="job-image"
                style={{ position: "relative", display: "hidden" }}
              >
                <img
                  src="https://i.postimg.cc/6QJWGcYs/2023-01-10-4-42-59.png"
                  style={{ width: "703px", height: "422px" }}
                  alt=""
                ></img>
                {state.jobImgUrl}
              </section>
              <section className="job-header">
                <h2> {state.jobImgUrl}</h2>
              </section>
              <div className="job-description">{state.title}</div>
              <section className="company-info"></section>
            </div>
            <aside className="jobprocess-container">
              <div className="beforeApplication-container">
                <header>
                  <div className="reward-container">
                    <ul>
                      <li className="left">
                        <h4>추천인</h4>
                        <p>500,000원</p>
                      </li>
                      <li className="right">
                        <h4>지원자</h4>
                        <p>500,000원</p>
                      </li>
                    </ul>
                    <button className="share-btn"></button>
                  </div>
                  <button
                    className="bookmark-btn"
                    onClick={handleBookmarkClick}
                  >
                    <svg width="13" height="16"></svg>
                    <span>북마크하기</span>
                  </button>
                  <div className="applybtn-container">
                    <button className="applybtn">지원하기</button>
                  </div>
                </header>
                <footer></footer>
              </div>
            </aside>
          </div>
        </div>
      </JobDetailSection>
    </>
  );
}

export default JobDetail;
