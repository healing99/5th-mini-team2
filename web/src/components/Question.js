import React from 'react';
import PropTypes from 'prop-types';
import AnswerInput from './AnswerInput';
import QuestionType from './QuestionType';
import DeleteIcon from '@/assets/images/delete.png';
import connectStore from '@/hoc/connectStore';
import DragDropButton from '@/assets/images/DragDropButton.png';

const Question = ({ idx, question, provided, actions }) => {
  return (
    <div className="question">
      <QuestionType idx={idx} type={question.type} />

      <div className="row">
        <div className="col-8">
          <div className="h-100 d-flex flex-column">
            <div className="title px-3 d-flex">
              <div className="question-number">문제 {idx + 1}</div>
              <div {...provided.dragHandleProps}>
                <img src={DragDropButton} />
              </div>
            </div>
            <div className="question-image flex-grow-1">
              <div>
                <span className="add">+</span>
                <p>이미지를 첨부하세요.</p>
              </div>
              <img className="delete" src={DeleteIcon} onClick={() => actions.removeQuestion(idx)} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <AnswerInput idx={idx} answer={question.answer} numChoices={question.numChoices} />
        </div>
      </div>

      <style jsx>{`
        .question {
          width: 100%;
          padding-bottom: 5%;
        }
        .question-number {
          flex-basis: 48.5%;
        }
        .question .title {
          margin-top: 20px;
          font-weight: 600;
          color: #707070;
          font-size: 18px;
          border: solid 1px #707070;
          border-bottom: none;
        }
        .question .question-image {
          width: 100%;
          background-color: #f2f2f2;
          display: flex;
          align-items: center;
          justify-content: center;
          border: solid 1px #707070;
          color: #707070;
          text-align: center;
        }
        .question .question-image > div {
          cursor: pointer;
        }
        .question .question-image .delete {
          position: absolute;
          right: 32px;
          bottom: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

Question.propTypes = {
  idx: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
};
export default connectStore(Question);
