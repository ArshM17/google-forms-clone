import React from "react";
import "../Styles/ResponseTab.css";

function ResponseTab({ response }) {
  return (
    <>
      <div className="responseContainer">
        <div className="count">{response.count} responses</div>
      </div>
    </>
  );
}

export default ResponseTab;
