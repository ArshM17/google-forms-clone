import React from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { useParams } from "react-router-dom";
function FormEdit() {
  const { id } = useParams();

  //get the form from database using id

  const form = {
    title: "Untitled Form",
    fields: [
      { question: "Question1?", options: ["A", "B", "C", "D"] },
      { question: "Question2?", options: ["A", "B", "C", "D"] },
    ],
  };

  return (
    <>
      <FormHeader form_title={form.title} />
      <h1>{id}</h1>
      <FormBody fields={form.fields} />
    </>
  );
}

export default FormEdit;
