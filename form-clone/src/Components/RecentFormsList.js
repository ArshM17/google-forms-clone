import React from "react";
import Form from "./Form";

import "../Styles/RecentFormList.css";

import blankImage from "../Images/blank.png";
import partyImage from "../Images/party.png";

const forms = [
  {
    img: blankImage,
    text: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    text: "Party Invite",
    id: "2",
  },
  {
    img: blankImage,
    text: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    text: "Party Invite",
    id: "2",
  },
  {
    img: blankImage,
    text: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    text: "Party Invite",
    id: "2",
  },
  {
    img: blankImage,
    text: "Blank",
    id: "1",
  },
  {
    img: partyImage,
    text: "Party Invite",
    id: "2",
  },
];

function RecentFormsList() {
  return (
    <div className="form-list">
      {forms.map((form, index) => (
        <Form key={index} img={form.img} formTitle={form.text} />
      ))}
    </div>
  );
}

export default RecentFormsList;
