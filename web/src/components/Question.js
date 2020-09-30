import React from 'react';
import AnswerInput from './AnswerInput';
import QuestionType from './QuestionType';

const Question = () => {
  return (
    <div className="question-root">
      <QuestionType />

      <div className="row input">
        <div className="col-8">
          <div className="question-image">이미지를 첨부하세요</div>
        </div>
        <div className="col-4">
          <AnswerInput />
        </div>
      </div>

      <style jsx>{`
        .question-root {
          width: 100%;
          padding-bottom: 5%;
        }
        .question-image {
          width: 100%;
          height: 100%;
          background-color: #f2f2f2;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 1px #707070;
        }
        .input { 
          margin-top: 24px;
        }
      `}</style>
    </div>
  );
};

export default Question;
