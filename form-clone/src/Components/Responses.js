import React from "react";

const ResponsesDisplayComponent = () => {
  const responses = [
    {
      "Question 1": "Option A",
      "Question 2": "Option C",
      "Question 3": "Option B",
    },
    {
      "Question 1": "Option B",
      "Question 2": "Option A",
      "Question 3": "Option C",
    },
    {
      "Question 1": "Option C",
      "Question 2": "Option B",
      "Question 3": "Option A",
    },
  ];

  return (
    <div>
      <h1>All Responses</h1>
      {responses.map((response, index) => (
        <div key={index}>
          <h3>Response {index + 1}</h3>
          {Object.entries(response).map(([question, option]) => (
            <div key={question}>
              <p>
                {question}:{option}
              </p>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ResponsesDisplayComponent;
