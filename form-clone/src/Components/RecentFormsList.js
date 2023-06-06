import React, { useEffect, useState } from "react";
import Form from "./Form";

import "../Styles/RecentFormList.css";

import blankImage from "../Images/blank.png";
import partyImage from "../Images/party.png";

//get user forms from data base
// const formList = [
//   {
//     img: blankImage,
//     title: "Blank",
//     id: "1",
//   },
//   {
//     img: partyImage,
//     title: "Party Invite",
//     id: "2",
//   },
//   {
//     img: blankImage,
//     title: "Blank",
//     id: "1",
//   },
//   {
//     img: partyImage,
//     title: "Party Invite",
//     id: "2",
//   },
//   {
//     img: blankImage,
//     title: "Blank",
//     id: "1",
//   },
//   {
//     img: partyImage,
//     title: "Party Invite",
//     id: "2",
//   },
//   {
//     img: blankImage,
//     title: "Blank",
//     id: "1",
//   },
//   {
//     img: partyImage,
//     title: "Party Invite",
//     id: "2",
//   },
// ];

function RecentFormsList() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/forms");
      const jsonData = await response.json();
      setForms(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return forms ? (
    <div className="form-list">
      {forms.map((form, index) => (
        <Form
          key={index}
          img={blankImage}
          formTitle={form.title}
          id={form.id}
        />
      ))}
    </div>
  ) : (
    <h6>Loading...</h6>
  );
}

export default RecentFormsList;
