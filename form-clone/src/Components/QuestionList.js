import React, { useEffect, useState } from "react";
import QuestionBlock from "../Components/QuestionBlock";
import "../Styles/QuestionList.css";

const QuestionList = ({ fields }) => {
  const [questionBlocks, setQuestionBlocks] = useState(fields);

  const handleAddQuestion = () => {
    setQuestionBlocks((prev) => [
      ...prev,
      { question: "", options: [], id: prev.length + 1 },
    ]);
  };

  const handleDeleteQuestion = (index) => {
    const updatedQuestionBlocks = [...questionBlocks];
    updatedQuestionBlocks.splice(index, 1);
    setQuestionBlocks(updatedQuestionBlocks);
    // console.log(updatedQuestionBlocks);
  };

  useEffect(() => {
    console.log(questionBlocks);
  }, [questionBlocks]);

  return (
    <div className="questionList">
      {questionBlocks.map((questionBlock, index) => (
        <div key={index} className="questionWrapper">
          <QuestionBlock
            key={index}
            i={questionBlock.id}
            ques={questionBlock}
          />
        </div>
      ))}
      <button className="addBtn" onClick={handleAddQuestion}>
        Add Question
      </button>
    </div>
  );
};

export default QuestionList;
