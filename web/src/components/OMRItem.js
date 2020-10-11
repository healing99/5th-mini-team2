import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { QUESTION_TYPES, EXAM } from '@/const';
import shortid from 'shortid';
import connectStore from '@/hoc/connectStore';

const OMRItem = ({ question, idx, actions, openModal }) => {
  const isSelected = (value) => question.answer.findIndex((answer) => answer === value) >= 0;

  const getMultipleChoices = () => (
    <div>
      {Array(EXAM.NUM_CHOICES)
        .fill(0)
        .map((_, answerIdx) => (
          <span
            onClick={() => actions.markAnswer(idx, answerIdx, !isSelected(answerIdx))}
            key={shortid()}
            className={classNames('dot', isSelected(answerIdx) && 'selected')}
          />
        ))}
    </div>
  );
  const getShortAnswer = () => (
    <div className="short-answer">
      <p onClick={openModal}>직접입력</p>
    </div>
  );

  const getItem = () => {
    if (question.type === QUESTION_TYPES.MULTIPLE_CHOICE) return getMultipleChoices(question.numChoices);
    return getShortAnswer();
  };

  return (
    <div className="omr-item">
      <span className="num text-center">{idx + 1}</span>
      {getItem()}
      <style jsx global>{`
        .omr-item {
          display: flex;
          align-items: center;
          padding: 8px;
          color: #6c6c6c;
        }
        .omr-item .num {
          font-size: 18px;
          padding: 0px 4px 0px 8px;
        }
        .omr-item .dot {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          display: inline-block;
          border: solid 2px #707070;
          cursor: pointer;
        }
        .omr-item .selected {
          background-color: #707070;
        }
        .omr-item .short-answer {
          border: solid 1px #878787;
          height: 30px;
        }
        .omr-item .short-answer p {
          width: 100%;
          text-align: center;
          margin: 0;
        }
        .omr-item div {
          flex-grow: 1;
          margin: 0px 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

OMRItem.propTypes = {
  question: PropTypes.object.isRequired,
  idx: PropTypes.number,
};

export default connectStore(OMRItem);
