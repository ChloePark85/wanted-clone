import React, { useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import Search from "./Search";
import SideMenu from "./SideMenu";

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 0%) 0px 1px 0px 0px;
  width: 100%;
  height: 55px;
  z-index: 10;
  border-bottom: #dddddd 1px solid;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  overflow: hidden;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  flex-shrink: 0;

  &:not(:first-child) {
    margin-left: 85px;
  }
  .blue-line {
    box-shadow: inset 0 -2px #258bf7;
  }
`;

const HamburgerMenu = styled.button`
  margin-right: 10px;
  img {
    cursor: pointer;
    height: 17px;
    width: 19px;
  }
`;

const MenuButton = styled.button`
  font-size: 15px;
  color: #333333;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  border: none;
  background: none;
  margin-right: 25px;
  box-sizing: border-box;
  display: inline-block;
  height: 50px;
  &:hover {
    box-shadow: inset 0 -2px lightgrey;
  }
  &:active {
    box-shadow: inset 0 -2px #258bf7;
  }
  .blue-line {
    box-shadow: inset 0 -2px #258bf7;
  }
`;

const Logo = styled.div`
  img {
    width: 95px;
    height: 24px;
  }
`;

const SignIn = styled.div`
  background: transparent;
  color: #333333;
  font-weight: 600;
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;

const Employers = styled.div`
  color: rgb(116, 116, 123);
  border: #dddddd 1px solid;
  border-radius: 20px;
  width: 81px;
  height: 30px;
  cursor: pointer;
  padding: 5px 0px;
  box-sizing: border-box;
  font-size: 13px;
`;

function Header() {
  const [isOpen, setOpen] = useState(false);
  const handleSearchClick = () => {
    setOpen(true);
  };
  const [sideOpen, setSideOpen] = useState(false);
  const SidemenuOpen = () => {
    setSideOpen((current) => !current);
  };

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <HamburgerMenu onMouseOver={SidemenuOpen}>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                  alt="hamburger"
                />
                <SideMenu isOpen={sideOpen} />
              </HamburgerMenu>
              <Link to="/">
                <Logo>
                  <img src="https://ifh.cc/g/580vog.png" alt="logo" />
                </Logo>
              </Link>
            </Menu>

            <Menu>
              <Link to="/jobsfeed">
                <MenuButton onClick={() => handleButtonClick("button1")}>
                  채용
                </MenuButton>
              </Link>
              <div>
                <div className="menu-buttons">
                  <MenuButton onClick={() => handleButtonClick("button2")}>
                    이벤트
                  </MenuButton>
                  <MenuButton onClick={() => handleButtonClick("button3")}>
                    직군별 연봉
                  </MenuButton>
                  <MenuButton onClick={() => handleButtonClick("button4")}>
                    이력서
                  </MenuButton>
                  <Link to="/community">
                    <MenuButton onClick={() => handleButtonClick("button5")}>
                      커뮤니티
                    </MenuButton>
                  </Link>
                  <MenuButton onClick={() => handleButtonClick("button6")}>
                    프리랜서
                  </MenuButton>
                  <MenuButton onClick={() => handleButtonClick("button7")}>
                    AI 합격예측
                  </MenuButton>
                </div>
                {activeButton && <div className="blue-line" />}
              </div>
            </Menu>
            <Menu>
              <MenuButton
                style={{ marginRight: "10px" }}
                onClick={handleSearchClick}
              >
                <IoIosSearch style={{ width: "24px", height: "24px" }} />
                <Search isOpen={isOpen} />
              </MenuButton>
              <Link to="/login">
                <MenuButton>
                  <SignIn>회원가입/로그인</SignIn>
                </MenuButton>
              </Link>
              <Link to="https://www.wanted.co.kr/dashboard/welcome">
                <MenuButton>
                  <Employers>기업 서비스</Employers>
                </MenuButton>
              </Link>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
}

export default Header;
