import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { QUESTION_TYPES, EXAM } from '@/const';
import connectStore from '@/hoc/connectStore';

const OMRItem = ({ question, idx, actions }) => {
  const isSelected = (value) => question.answer.findIndex((answer) => answer === value) >= 0;

  const markAnswer = (idx, answerIdx, selected) => {
    actions.markAnswer(idx, answerIdx, selected);

    if (selected && question.answer.length === 0) actions.decreaseRemaining();
    if (!selected && question.answer.length - 1 === 0) actions.increaseRemaining();
  };

  const writeAnswer = (idx, value) => {
    if (!value && question.answer[0]) actions.increaseRemaining();
    if (value && !question.answer[0]) actions.decreaseRemaining();

    actions.writeAnswer(idx, value);
  };

  const getMultipleChoices = () => (
    <div>
      {Array(EXAM.NUM_CHOICES)
        .fill(0)
        .map((_, answerIdx) => (
          <span
            onClick={() => markAnswer(idx, answerIdx, !isSelected(answerIdx))}
            key={shortid()}
            className={classNames('dot', isSelected(answerIdx) && 'selected')}
          />
        ))}
    </div>
  );

  const getItem = () => {
    if (question.type === QUESTION_TYPES.MULTIPLE_CHOICE) return getMultipleChoices(question.numChoices);
    return (
      <input
        value={question.answer[0]}
        onChange={({ target: { value } }) => writeAnswer(idx, value)}
        className="short-answer"
        placeholder="직접입력"
      />
    );
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
          width: 100%;
          margin: 0px 8px;
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
