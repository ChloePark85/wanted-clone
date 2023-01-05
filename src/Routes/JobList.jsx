import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";

const Base = styled.div`
  background: #fff;
  min-height: calc(100vh-50px);
`;
const NavBarContainer = styled.div`
  background: #fff;
  padding-top: 40px;
`;
const NavBar = styled.div`
  position: relative;
  display: flex;
  max-width: 1060px;
  align-items: center;
  .nav-button {
    display: flex;
    align-items: center;
    white-space: nowrap;
    > button {
      padding-top: 3px;
      margin-right: 15.5px;
      font-size: 24px;
      line-height: 29px;
      font-weight: 700;
      color: #333;
    }
  }
`;

function JobList() {
  return (
    <Base>
      <Header />
      <NavBarContainer>
        <NavBar>
          <button class="nav-button">
            <span>전체</span>
          </button>
        </NavBar>
      </NavBarContainer>
    </Base>
  );
}

export default JobList;
