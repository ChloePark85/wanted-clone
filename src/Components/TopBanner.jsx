import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Base = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
`;

const Container = styled.div``;

const StyledSlider = styled(Slider)`
  margin-bottom: 0;
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-list {
    padding: 0px 40px;
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
  }
  .slick-track {
    width: 8928px;
    opacity: 1;
    transform: translate3d(-3720px, 0px, 0px);
    position: relative;
    left: 0;
    top: 0;
    display: block;
  }
  .slick-cloned {
    width: 744px;
  }
  .slick-slide {
    position: relative;
    display: block;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-next {
    right: 1rem;
  }
  .slick-prev {
    display: block;
    left: -25px;
    z-index: 1;
    position: absolute;
    height: 20px;
    width: 20px;
    line-height: 0;
    cursor: pointer;
    background: transparent;
    color: transparent;
    top: 50%;
    margin-top: -10px;
    padding: 0;
    border: none;
    outline: none;
  }
`;

const PrevButton = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  margin: auto 590px auto 0px;
  z-index: 100;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 1;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K)
    50% 50% no-repeat;
  transform: rotate(180deg);
`;

const NextButton = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0;
  margin: auto 0px auto 590px;
  z-index: 100;
  width: 52px;
  height: 52px;
  transition: all 0.5s ease 0s;
  opacity: 1;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K)
    50% 50% no-repeat;
  transform: rotate(0deg);
`;

function TopBanner() {
  // const [bannerData, setBanerData] = useState([])

  // useEffect(() => {
  //     getBannerData();
  //   }, []);

  //   const getBannerData = async () => {
  //     const result = await axios({
  //       method: "GET",
  //       url: "/"
  //     })
  //     setBannerData(result.data.bannerImgs);
  //   }

  const settings = {
    infinite: true,
    slidesToshow: 3,
    speed: 500,
    autoplay: true,
    dots: false,
    arrows: true,
    slidesToScroll: 3,
    swipe: true,
    draggable: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <Base>
      <Container>
        <StyledSlider className="slick-slider" {...settings}>
          {/* {bannerData.map((banner) => (
            <div className="slider">
                <a key ={banner.id}>
                    <img src={banner.url} alt={banner.id} className="banner-image"/>
                    </a>
                </div>
        ))} */}
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1923%2Fddbcd144.jpg&w=1060&q=100"
            alt=""
          />
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1922%2Fb4e10b20.jpg&w=1060&q=100"
            alt=""
          />
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1924%2Fca88f657.jpg&w=1060&q=100"
            alt=""
          />
          <img
            style={{ width: "100%" }}
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1897%2Fff68e2df.jpg&w=1060&q=100"
            alt=""
          />
        </StyledSlider>
      </Container>
    </Base>
  );
}

export default TopBanner;
