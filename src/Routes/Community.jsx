import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";

const CommunityPost = styled.div`
  width: 1068px;
  display: flex;
  margin: 0 auto;
  position: relative;
  .community-post-aside {
    display: flex;
    flex: 0 0 258px;
    padding: 0;
    margin: 60px 20px 0 0;
    box-sizing: border-box;
  }
  .aside-area {
    position: fixed;
    top: 100px;
    display: grid;
    grid-row-gap: 14px;
    row-gap: 14px;
    box-sizing: border-box;
  }
  .community-profile {
    width: 258px;
    height: 123px;
    padding: 23px 24px;
    background-color: #fff;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
  }
  .open-profile-banner {
    padding: 0;
    box-sizing: border-box;
  }
  .recommend-profile {
    width: 258px;
    padding: 23px 0;
    background: #fff;
    border: 1px solid #e1e2e3;
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;
  }
  .title {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
    color: #666;
  }
  .profile-link {
    position: relative;
    display: flex;
    width: 100%;
    height: 37px;
    cursor: pointer;
  }
  .use-avatar {
    width: 38px;
    height: 38px;
    border: 1px solid #ececec;
    border-radius: 50%;
    overflow: hidden;
    background-color: #d8d8d8;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      clip-path: circle(50% at 50% 50%);
    }
  }
  .profile-username {
    display: flex;
    align-items: center;
    width: 134px;
    height: 100%;
    margin-left: 10px;
    color: #666;
    span {
      text-align: left;
      font-size: 16px;
      font-style: normal;
      line-height: 22px;
      color: #000;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .community-post-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
`;

function Community() {
  return (
    <>
      <Header />
      <CommunityPost>
        <aside className="community-post-aside">
          <div className="aside-area">
            <div className="community-profile">
              <h2 className="title">MY 커뮤니티</h2>
              <button className="profile-link">
                <div className="use-avatar">
                  <img
                    src="https://static.wanted.co.kr/images/profile_default.png"
                    alt=""
                  />
                </div>
                <div className="profile-username">
                  <span>로그인 해주세요</span>
                </div>
                <span className="arrow"></span>
              </button>
            </div>
            <div className="openprofile-banner"></div>
            <div className="recommend-profile">
              <h3 className="recommend-profile-title">
                업데이트된 추천 프로필
              </h3>
              <p className="recommend-profile-subtitle">
                관심있는 프로필을 찾아보세요.
              </p>
              <div className="recommend-profile-rows"></div>
              <div className="recommend-profile-actions"></div>
            </div>
          </div>
        </aside>
        <main className="community-post-content">
          <div className="community-post-categories">
            <div className="interest-category"></div>
          </div>
          <div className="community-post-content">
            <section className="top-pick-post">
              <div className="top-pick-post-header">
                <div className="top-pick-post-header-title"></div>
                <nav className="top-pick-post-view"></nav>
              </div>
              <div className="top-pick-post-list">
                <article className="top-pick-post-item"></article>
                <article className="top-pick-post-item"></article>
                <article className="top-pick-post-item"></article>
              </div>
            </section>
            <section className="post-write-button"></section>
            <section className="recommended-post"></section>
          </div>
        </main>
      </CommunityPost>
    </>
  );
}

export default Community;
