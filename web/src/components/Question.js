import React from 'react';
import AnswerInput from './AnswerInput';
import QuestionType from './QuestionType';

const Question = () => {
  return (
    <div className="question-root">
      <QuestionType />

      <div className="row">
        <div className="col-8">이미지 첨부</div>
        <div className="col-4">
          <AnswerInput />
        </div>
      </div>

      <style jsx>{`
        .question-root {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Question;
