import React from "react";

import Template from "./Template";
import "../Styles/TemplateList.css";

import blankImage from "../Images/blank.png";
import partyImage from "../Images/party.png";
import contactImage from "../Images/contact.png";
import rsvpImage from "../Images/rsvp.png";

const templates = [
  {
    img: blankImage,
    text: "Blank",
  },
  {
    img: partyImage,
    text: "Party Invite",
  },
  {
    img: contactImage,
    text: "Contact Information",
  },
  {
    img: rsvpImage,
    text: "RSVP",
  },
];

function TemplateList() {
  return (
    <div className="template-list">
      {templates.slice(0, 5).map((template, index) => (
        <Template key={index} img={template.img} text={template.text} />
      ))}
    </div>
  );
}

export default TemplateList;
