import React, { useEffect, useState } from "react";

const ResponsesDisplayComponent = () => {
  const [responses, setResponses] = useState(null);
  // const responses = {
  //   id: "23489234",
  //   responses: [
  //     {
  //       "Question 1": "Option A",
  //       "Question 2": "Option C",
  //       "Question 3": "Option B",
  //     },
  //     {
  //       "Question 1": "Option B",
  //       "Question 2": "Option A",
  //       "Question 3": "Option C",
  //     },
  //     {
  //       "Question 1": "Option C",
  //       "Question 2": "Option B",
  //       "Question 3": "Option A",
  //     },
  //   ],
  // };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/form/responses");
      const jsonData = await response.json();
      setResponses(jsonData);
      // console.log(formData);
      // console.log("json");
      // console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return responses ? (
    <div>
      <h1>All Responses</h1>
      {responses.responses.map((response, index) => (
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
  ) : null;
};

export default ResponsesDisplayComponent;
