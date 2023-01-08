import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const ArticleDetailContainer = styled.div``;

function ArticleDetail({ isOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1399",
        },
        content: {
          position: "relative",
          display: "flex",
          padding: "0",
          overflow: "initial",
          backgroundColor: "#fff",
          borderRadius: "5px",
          width: "700px",
          height: "calc(100% - 64px)",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zindex: "1399",
          boxShadow: "4px 4px 4px 0 rgb(0 0 0 / 10%)",
        },
      }}
    >
      <ArticleDetailContainer>세부내용</ArticleDetailContainer>
    </ReactModal>
  );
}

export default ArticleDetail;
