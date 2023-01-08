import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";

const JobDetailSection = styled.div`
  background-color: #fff;
  .content-left {
    display: inline-block;
    width: calc() (100% - 36px);
    vertical-align: top;
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
`;

function JobDetail() {
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
                <img alt=""></img>
              </section>
              <section className="job-header">
                <h2>검색광고 마케터</h2>
              </section>
            </div>
          </div>
        </div>
      </JobDetailSection>
    </>
  );
}

export default JobDetail;
