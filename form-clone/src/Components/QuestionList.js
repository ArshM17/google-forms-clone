import React, { useState } from "react";
import QuestionBlock from "../Components/QuestionBlock";
import "../Styles/QuestionList.css";

const QuestionList = () => {
  const [questionBlocks, setQuestionBlocks] = useState([]);

  const handleAddQuestion = () => {
    setQuestionBlocks([
      ...questionBlocks,
      <QuestionBlock key={questionBlocks.length} />,
    ]);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestionBlocks = [...questionBlocks];
    updatedQuestionBlocks.splice(index, 1);
    setQuestionBlocks(updatedQuestionBlocks);
  };

  return (
    <div className="questionList">
      {questionBlocks.map((questionBlock, index) => (
        <div key={index} className="questionWrapper">
          <QuestionBlock />
          <button onClick={() => handleDeleteQuestion(index)}>
            Delete Question
          </button>
        </div>
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default QuestionList;
