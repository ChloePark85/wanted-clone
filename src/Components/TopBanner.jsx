import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Base = styled.div`
  padding-top: 35px;
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
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  .slick-list {
    padding: 0px 50px;
    position: relative;
    overflow: hidden;
    margin: 0;
  }

  .slick-slide {
    width: 1060px;
    height: 300px;
    position: relative;
    display: block;
    /* float: left; */
    min-height: 1px;
    border-radius: 20px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-prev {
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
  }

  .slick-next {
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
  }
`;

function TopBanner() {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    getBannerData();
  }, []);

  const getBannerData = async () => {
    const result = await axios({
      method: "GET",
      url: "https://prod.seolki.shop/banners/main",
    });
    setBannerData(result.data.result);
    console.log(result);
  };

  const settings = {
    infinite: true,
    slidesToshow: 3,
    speed: 600,
    autoplay: true,
    dots: false,
    arrows: true,
    slidesToScroll: 3,
    swipe: true,
    draggable: true,
  };

  return (
    <Base>
      <Container>
        <StyledSlider {...settings}>
          {bannerData.length > 0 &&
            bannerData.map((banner) => (
              <div class="slick-list">
                <div className="slick-slide">
                  <img
                    key={banner.bannerIdx}
                    src={banner.bannerImgUrl}
                    alt={banner.bannerTitle}
                  />
                </div>
              </div>
            ))}
        </StyledSlider>
      </Container>
    </Base>
  );
}

export default TopBanner;
