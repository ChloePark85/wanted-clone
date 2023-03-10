import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../Components/Header";

const Base = styled.div`
  background: #fff;
  min-height: calc(100vh - 50px);
`;
const NavBarContainer = styled.article`
  background: #fff;
  padding-top: 100px;
`;
const NavBar = styled.div`
  margin: 0 130px;
  position: relative;
  display: flex;
  max-width: 1060px;
  align-items: center;
  padding: 0;
  .nav-button {
    display: flex;
    align-items: center;
    white-space: nowrap;
    > span {
      padding-top: 3px;
      margin-right: 15.5px;
      font-size: 24px;
      line-height: 29px;
      font-weight: 700;
      color: #333;
    }
  }
  .job-category {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    ::before {
      content: "|";
      font-size: 28px;
      line-height: 29px;
      padding: 3px 24px 0;
      color: #ececec;
    }
  }
  .job-category-select {
    padding-top: 3px;
    font-size: 24px;
    line-height: 29px;
    font-weight: 400;
    color: #aaa;
  }
`;

const JobListContentWrapper = styled.div`
  position: relative;
  max-width: 1060px;
  margin: 0 130px;
  padding: 20px 0 80px;
  .filter-container {
    margin-bottom: 25px;
    padding-top: 10px;
  }
  .filter-row1 {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .filter-button-group {
    display: flex;
    align-items: center;
    flex: auto;
    justify-content: center;
    max-width: none;
  }
  .filter-button {
    align-items: center;
    display: inline-flex;
    height: 40px;
    padding: 0 15px !important;
    margin-bottom: 0;
    border-radius: 5px;
    border: 1px solid #ececec;
    position: relative;
    > span {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: normal;
      color: #333;
      white-space: nowrap;
    }
    > svg {
      margin-left: 8px;
      transition: 0.3s;
      width: 8;
      height: 7;
      fill: none;
    }
  }
  hr {
    max-width: 1060px;
    margin: 25px auto;
    background-color: rgba(236, 236, 236, 0.7);
    height: 1px;
    border: none;
    box-sizing: content-box;
  }
  .select-button {
    border-radius: 4px;
    border: 1px solid #ececec;
    background-color: #fff;
    font-size: 14px;
    font-weight: 400;
    height: 40px;
    letter-spacing: normal;
    color: #000;
    padding: 0 16px;
    position: relative;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bookmark-section {
    margin-bottom: 12px;
  }
  .job-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    word-break: break-word;
    column-gap: 20px;
  }
  .job-card-position {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 10px;
    position: relative;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-align: left;
    word-break: break-word;
  }
  .job-card-company {
    color: #333;
    font-weight: 600;
    font-size: 14px;
  }
  .job-card-location {
    font-weight: 400;
    color: #999;
  }
  .reward {
    margin-top: 10px;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    word-break: break-word;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

function JobList(props) {
  const [jobs, setJobs] = useState([]);
  const [option, setOption] = useState(1);
  const handleOptionChange = (event) => {
    setOption(event.target.value);
    if (option === "1") {
      axios
        .get("https://prod.seolki.shop/recruit/all", {
          headers: {
            "X-ACCESS-TOKEN":
              "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjozLCJpYXQiOjE2NzI3OTc1OTEsImV4cCI6MTY3NDI2ODgyMH0.gPh7dDdYuY8gruVV7GX-Vrau7fp4gaxhOWuzjjR2ym0",
          },
        })
        .then((res) => {
          console.log(res.data.result);
          setJobs(res.data.result);
        });
    } else if (option === "2") {
      axios
        .get("https://prod.seolki.shop/recruit/latest-order", {
          headers: {
            "X-ACCESS-TOKEN":
              "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjozLCJpYXQiOjE2NzI3OTc1OTEsImV4cCI6MTY3NDI2ODgyMH0.gPh7dDdYuY8gruVV7GX-Vrau7fp4gaxhOWuzjjR2ym0",
          },
        })
        .then((res) => {
          console.log(res.data.result);
          setJobs(res.data.result);
        });
    } else if (option === "3") {
      axios.get("https://prod.seolki.shop/recruit/posts/money").then((res) => {
        console.log(res.data.result);
        setJobs(res.data.result);
      });
    } else if (option === "4") {
      axios.get("https://prod.seolki.shop/recruit/posts/view").then((res) => {
        console.log(res.data.result);
        setJobs(res.data.result);
      });
    }
  };
  const navigate = useNavigate();
  const onClickJobItem = () => {
    navigate(`/joblist/${jobs.jobIdx}`, {
      state: props,
    });
  };

  const [jobType, setJobType] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://prod.seolki.shop/recruit/category?job-type=${jobType}`,
        {
          headers: {
            "X-ACCESS-TOKEN":
              "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWR4IjozLCJpYXQiOjE2NzI3OTc1OTEsImV4cCI6MTY3NDI2ODgyMH0.gPh7dDdYuY8gruVV7GX-Vrau7fp4gaxhOWuzjjR2ym0",
          },
        }
      );
      console.log(response);
      setJobs(response.data.result);
    };
    fetchData();
  }, [jobType]);

  return (
    <Base>
      <Header />
      <NavBarContainer>
        <NavBar>
          <div>
            <select
              class="nav-button"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">??????</option>
              <option value="1">??????</option>
              <option value="2">????????????????????</option>
              <option value="3">?????????????????</option>
              <option value="4">?????????</option>
              <option value="5">??????</option>
              <option value="6">??????????????????????????</option>
              <option value="7">?????????</option>
              <option value="8">?????? ??????</option>
              <option value="9">HR</option>
              <option value="10">???????????????????????</option>
              <option value="11">??????</option>
              <option value="12">??????????????</option>
              <option value="13">?????????????????????????</option>
              <option value="14">??????????????</option>
              <option value="15">??????</option>
              <option value="16">???????????</option>
              <option value="17">???????????????????????</option>
              <option value="18">??????????????</option>
              <option value="19">??????????????</option>
            </select>
          </div>
          <div class="job-category">
            <span class="job-category-select">????????? ??????????????????.</span>
          </div>
        </NavBar>
        <JobListContentWrapper>
          <div className="job-list">
            <div className="filter-wrapper">
              <div className="filter-container">
                <div className="filter-row1">
                  <div className="filter-button-group">
                    <div className="filter-button">
                      <span>??????</span>
                      <span
                        style={{
                          color: "#36f",
                          fontWeight: "600",
                          marginRight: "0",
                          overflow: "hidden",
                        }}
                      >
                        ??????
                      </span>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      <div className="filter-button">
                        <span>??????</span>
                        <span
                          tyle={{
                            color: "#36f",
                            fontWeight: "600",
                            marginRight: "0",
                            overflow: "hidden",
                          }}
                        >
                          ??????
                        </span>
                        {/* <svg>
                          <path d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"></path>
                        </svg> */}
                      </div>
                    </div>
                    <div className="filter-button">
                      <span>????????????</span>
                    </div>
                    <div
                      className="filter-button"
                      style={{ marginLeft: "auto" }}
                    >
                      <div
                        className="selector"
                        style={{ position: "relative" }}
                      >
                        <div
                          className="hidden-selector"
                          style={{ width: "104px" }}
                        >
                          <button className="select-button">
                            <select
                              value={option}
                              onChange={handleOptionChange}
                            >
                              <option value="1">????????????</option>
                              <option value="2">?????????</option>
                              <option value="3">????????????</option>
                              <option value="4">?????????</option>
                            </select>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            </div>
            <hr
              style={{
                width: "100vw",
                marginBottom: "38px",
                marginLeft: "calc(-50vw + 50%)",
                backgroundColor: "e1e2e3",
                height: "1px",
                margin: "0",
                border: "none",
                boxSizing: "content-box",
              }}
            ></hr>
            <div className="bookmark-section"></div>
            <div className="job-list-section">
              <ul className="job-list-ul">
                <div className="body" class="job-card" onClick={onClickJobItem}>
                  {jobs.map((props) => (
                    <div key={props.jobIdx}>
                      <div>
                        <img
                          src={props.jobImgUrl}
                          alt={props.company}
                          style={{
                            width: "248px",
                            height: "184px",
                            borderRadius: "4px",
                          }}
                        />
                      </div>
                      <div style={{ padding: "14px 0", width: "214px" }}>
                        <div className="job-card-position">{props.title}</div>
                        <div className="job-card-company">{props.company}</div>
                        <div className="job-card-location">{props.region}</div>
                        <div className="reward">??????????????? {props.money}???</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </JobListContentWrapper>
      </NavBarContainer>
    </Base>
  );
}

export default JobList;
