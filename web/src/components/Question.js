import React from 'react';
import AnswerInput from './AnswerInput';
import QuestionType from './QuestionType';
import DeleteIcon from '@/assets/images/delete.png';

const Question = ({ num = 0 }) => {
  return (
    <div className="question-root">
      <QuestionType />

      <p className="title">문제 {num}</p>
      <div className="row">
        <div className="col-8">
          <div className="question-image">
            <div>
              <span className="add">+</span>
              <p>이미지를 첨부하세요.</p>
            </div>
            <img className="delete" src={DeleteIcon} />
          </div>
        </div>
        <div className="col-4">
          <AnswerInput />
        </div>
      </div>

      <style jsx>{`
        .add { 
          font-size: 28px;
        }
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
          color: #707070;
          text-align: center;
        }
        .question-image > div {
          cursor: pointer;
        }
        .question-image .delete {
          position: absolute;
          right: 32px;
          bottom: 16px;
          cursor: pointer;
        }
        .title {
          margin-top: 20px;
          font-weight: 600;
          color: #707070;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default Question;
