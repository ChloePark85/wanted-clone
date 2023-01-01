import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Base = styled.div`
  padding-top: 25px;
`;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 1260px;
  height: 304px;
`;

const StyledSlider = styled(Slider)`
  margin-top: 25px;
  margin-bottom: 0;
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  img {
    width: 1061px;
    height: 300px;
    border-radius: 20px;
  }
  .slick-list {
    padding: 0px 50px;
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
  }

  .slick-track {
    /* width: 8928px;
    opacity: 1;
    position: relative;
    left: 0;
    top: 0;
    display: block; */
  }
  .slick-slide {
    width: 1060px;
    height: 300px;
    position: relative;
    display: block;
    float: left;
    min-height: 1px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }

  .slick-cloned {
    width: 744px;
  }

  .slick-slide div {
    outline: none;
  }
`;

const PrevButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  left: calc((100% - 1210px) / 2);
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  font-size: 15px;
  background-color: #fff;
  font-size: 16px;
  z-index: 10;
  overflow: visible;
`;

const NextButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
  right: calc((100% - 1200px) / 2);
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  font-size: 15px;
  background-color: #fff;
  font-size: 16px;
  z-index: 10;
  overflow: visible;
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
        <StyledSlider {...settings}>
          {/* {bannerData.map((banner) => (
            <div className="slider">
                <a key ={banner.id}>
                    <img src={banner.url} alt={banner.id} className="banner-image"/>
                    </a>
                </div>
        ))} */}
          {/* 
            <div class="slick-track"> */}

          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1923%2Fddbcd144.jpg&w=1060&q=100"
            alt=""
            class="slick-slide"
          />
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1922%2Fb4e10b20.jpg&w=1060&q=100"
            alt=""
            class="slick-slide"
          />
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1924%2Fca88f657.jpg&w=1060&q=100"
            alt=""
            class="slick-slide"
          />
          <img
            style={{ width: "100%" }}
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1897%2Fff68e2df.jpg&w=1060&q=100"
            alt=""
            class="slick-slide"
          />
          {/* </div>
          </div> */}
        </StyledSlider>
      </Container>
    </Base>
  );
}

export default TopBanner;
