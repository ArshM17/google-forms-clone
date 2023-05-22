import React, { useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { useParams } from "react-router-dom";

function FormEdit() {
  const { id } = useParams();

  //get the form from database using id

  // const [form, setForm] = useState({});

  const temp = {
    title: "Untitled",
    fields: [
      { question: "Question1?", options: ["A", "B", "Q", "D", "R"] },
      { question: "Question2?", options: ["A", "B", "P", "D"] },
      { question: "Question3?", options: ["A", "F", "C"] },
      { question: "Question4?", options: ["A", "D"] },
    ],
    response: {
      count: 0,
      responses: [
        [1, 2, 3, 4, 1],
        [4, 1, 2, 3],
        [4, 3, 0],
        [1, 6],
      ],
    },
  };

  // useEffect(() => {
  //   // const temp = {
  //   //   title: "Untitled",
  //   //   fields: [
  //   //     { question: "Question1?", options: ["A", "B", "Q", "D", "R"] },
  //   //     { question: "Question2?", options: ["A", "B", "P", "D"] },
  //   //     { question: "Question3?", options: ["A", "F", "C"] },
  //   //     { question: "Question4?", options: ["A", "D"] },
  //   //   ],
  //   //   response: {
  //   //     count: 0,
  //   //     responses: [
  //   //       [1, 2, 3, 4, 1],
  //   //       [4, 1, 2, 3],
  //   //       [4, 3, 0],
  //   //       [1, 6],
  //   //     ],
  //   //   },
  //   // };
  //   // setForm(temp);
  //   fetch("http://localhost:5000/form")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setForm(data);
  //     });
  // }, []);

  return (
    <>
      <FormHeader form_title={temp.title} />
      <h1>{id}</h1>
      <FormBody fields={temp.fields} response={temp.response} />
      {/* {console.log("yha hu")}
      {console.log(form)} */}
    </>
  );
}

export default FormEdit;
