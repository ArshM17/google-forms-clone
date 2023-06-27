import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "../Styles/ChildComponent.css"
=======
import "../Styles/Child.css";

>>>>>>> 79502d538109f88d5ff2239239c19e422b21b07a
const ChildComponent = ({ formQuestions, setFormData }) => {
  const [questions, setQuestions] = useState(formQuestions);

  useEffect(() => {
    setQuestions(formQuestions);
  }, []);

  const handleAddQuestion = () => {
    const newQuestion = { question: "", options: [] };
    setQuestions([...questions, newQuestion]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (index, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      question: e.target.value,
    };
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestions(updatedQuestions);
  };

  // Update formData whenever questions change
  useEffect(() => {
    const updatedFormData = questions.map((question) => {
      const { question: q, options } = question;
      return {
        question: q,
        options: options.filter((option) => option !== ""),
      };
    });
    setFormData(updatedFormData);
  }, [questions, setFormData]);

  return (
    // <div>
    //   {questions.map((question, questionIndex) => (
    //     <div key={questionIndex}>
    //       <input
    //         type="text"
    //         value={question.question}
    //         onChange={(e) => handleQuestionChange(questionIndex, e)}
    //         placeholder="Question"
    //       />

    //       {question.options.map((option, optionIndex) => (
    //         <div key={optionIndex}>
    //           <input type="radio" />
    //           <input
    //             type="text"
    //             value={option}
    //             onChange={(e) =>
    //               handleOptionChange(questionIndex, optionIndex, e)
    //             }
    //             placeholder="Option"
    //           />
    //           <button
    //             onClick={() => handleRemoveOption(questionIndex, optionIndex)}
    //           >
    //             Remove Option
    //           </button>
    //         </div>
    //       ))}

    //       <button onClick={() => handleAddOption(questionIndex)}>
    //         Add Option
    //       </button>

    //       <button onClick={() => handleRemoveQuestion(questionIndex)}>
    //         Remove Question
    //       </button>
    //     </div>
    //   ))}

    //   <button onClick={handleAddQuestion}>Add Question</button>
    // </div>
<<<<<<< HEAD
    <div className="component-container">
      {questions.map((question, questionIndex) => (
        <div className="question-container" key={questionIndex}>
=======
    <div class="form-container-child">
      {questions.map((question, questionIndex) => (
        <div class="question-container" key={questionIndex}>
>>>>>>> 79502d538109f88d5ff2239239c19e422b21b07a
          <input
            type="text"
            value={question.question}
            onChange={(e) => handleQuestionChange(questionIndex, e)}
            placeholder="Question"
          />

          {question.options.map((option, optionIndex) => (
<<<<<<< HEAD
            <div className="option-container" key={optionIndex}>
=======
            <div class="option-container" key={optionIndex}>
>>>>>>> 79502d538109f88d5ff2239239c19e422b21b07a
              <input type="radio" />
              <input
                type="text"
                value={option}
                onChange={(e) =>
                  handleOptionChange(questionIndex, optionIndex, e)
                }
                placeholder="Option"
              />
              <button className="btn_red"
                onClick={() => handleRemoveOption(questionIndex, optionIndex)}
              >
                Remove Option
              </button>
            </div>
          ))}

<<<<<<< HEAD
          <button  className="btn_add"  onClick={() => handleAddOption(questionIndex)}>
            Add Option
          </button>

          <button className="btn_red" onClick={() => handleRemoveQuestion(questionIndex)}>
            Remove Question
          </button>
        </div>
      ))}

      <button  className="btn_add" onClick={handleAddQuestion}>Add Question</button>
=======
          <div class="button-container">
            <button onClick={() => handleAddOption(questionIndex)}>
              Add Option
            </button>

            <button onClick={() => handleRemoveQuestion(questionIndex)}>
              Remove Question
            </button>
          </div>
        </div>
      ))}

      <button className="add-q" onClick={handleAddQuestion}>
        Add Question
      </button>
>>>>>>> 79502d538109f88d5ff2239239c19e422b21b07a
    </div>
  );
};

export default ChildComponent;
