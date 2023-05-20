import React, { useEffect, useState } from "react";
import QuestionBlock from "../Components/QuestionBlock";
import "../Styles/QuestionList.css";

const QuestionList = ({ fields }) => {
  const [questionBlocks, setQuestionBlocks] = useState([...fields]);

  const handleAddQuestion = () => {
    setQuestionBlocks([...questionBlocks, { question: "", options: [] }]);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestionBlocks = [...questionBlocks];
    updatedQuestionBlocks.splice(index, 1);
    setQuestionBlocks(updatedQuestionBlocks);
  };

  console.log(`asdlkfj:${questionBlocks}`);

  return (
    <div className="questionList">
      {questionBlocks.map((questionBlock, index) => (
        <div key={index} className="questionWrapper">
          {/* <h1>{questionBlock[index].question}</h1> */}
          <QuestionBlock ques={questionBlocks[index]} />
          <button
            className="deleteBtn"
            onClick={() => handleDeleteQuestion(index)}
          >
            Delete Question
          </button>
        </div>
      ))}
      <button className="addBtn" onClick={handleAddQuestion}>
        Add Question
      </button>
    </div>
  );
};

export default QuestionList;
