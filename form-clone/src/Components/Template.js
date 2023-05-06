import React from "react";
import "../Styles/Template.css";

function Template({ img, text }) {
  return (
    <div className="template-card">
      <img src={img} alt={text} className="template-image" />
      <div className="template-text">{text}</div>
    </div>
  );
}

export default Template;
