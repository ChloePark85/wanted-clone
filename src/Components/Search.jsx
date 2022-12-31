import React from "react";
import ReactModal from "react-modal";

function Search({ isOpen }) {
  return (
    <ReactModal isOpen={isOpen}>
      <div>모달입니다.</div>
    </ReactModal>
  );
}

export default Search;
