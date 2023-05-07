import React, { useState } from "react";
import Form from "./Form";

import "../Styles/RecentFormList.css";

import blankImage from "../Images/blank.png";
import partyImage from "../Images/party.png";

//get user forms from data base
const formList = [
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
  const [forms, setForms] = useState(formList);

  return (
    <div className="form-list">
      {forms.map((form, index) => (
        <Form key={index} img={form.img} formTitle={form.text} id={form.id} />
      ))}
    </div>
  );
}

export default RecentFormsList;
