import React from "react";
import QuestionBlock from "../Components/QuestionBlock";
import "../Styles/QuestionList.css";

const QuestionList = ({ fields, handleAddQuestion, handleDeleteQuestion }) => {
  // console.log(fields);
  return (
    <div className="questionList">
      {fields.map((questionBlock, index) => (
        <div key={index} className="questionWrapper">
          {/* {console.log(questionBlock)} */}
          <QuestionBlock
            ques={questionBlock}
            handleDeleteQuestion={handleDeleteQuestion}
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
