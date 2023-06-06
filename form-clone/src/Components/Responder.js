import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResponderComponent = () => {
  const [formTitle, setFormTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/form");
      const jsonData = await response.json();
      setFormTitle(jsonData.title);
      setQuestions(jsonData.questions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOptionChange = (questionIndex, optionIndex) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questions[questionIndex].question]:
        questions[questionIndex].options[optionIndex],
    }));
  };

  const handleSubmit = () => {
    // Send responses to the backend
    const response = { id: id, responses: responses };
    // console.log("Form Title:", formTitle);
    // console.log("Responses:", responses);
    console.log(response);
    alert("Response Recorded");
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{formTitle}</h1>

      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.question}</h3>

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                <input
                  type="radio"
                  name={`question${questionIndex}`}
                  checked={responses[question.question] === option}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ResponderComponent;
