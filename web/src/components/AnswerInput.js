import React from 'react';
import PropTypes from 'prop-types';
import AnswerItem from './AnswerItem';
import LongAnswerItem from './LongAnswerItem';
import ShortAnswerItem from './ShortAnswerItem';
import { QUESTION_TYPES } from '@/const';
import connectStore from '@/hoc/connectStore';

const AnswerInput = ({ answer, numChoices, idx, actions, type }) => {
  const isAnswer = (value) => answer.findIndex((item) => item === value) >= 0;

  const multipleChoiceList = () =>
    Array(numChoices)
      .fill(0)
      .map((_, answerIdx) => (
        <AnswerItem
          key={answerIdx}
          checked={isAnswer(answerIdx)}
          answerIdx={answerIdx}
          onToggle={() => actions.toggleAnswer(idx, answerIdx, !isAnswer(answerIdx))}
        />
      ));

  const getInput = () => {
    switch (type) {
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return multipleChoiceList();
      case QUESTION_TYPES.LONG_ANSWER:
        return <LongAnswerItem />;
      case QUESTION_TYPES.SHORT_ANSWER:
        return <ShortAnswerItem />;
      default:
        return null;
    }
  };

  return (
    <div className="answer-form">
      <div className="answer-form__nav">
        <p className="answer-form__title">채점용 정답 입력</p>
      </div>
      <div className="answer-form__content">{getInput()}</div>

      <style jsx>
        {`
          .answer-form {
            height: 400px;
            border: solid 1px #707070;
          }
          .answer-form__nav {
            height: 50px;
            background-color: #4893c4;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .answer-form__title {
            width: 100%;
            font-size: 16px;
            color: #fff;
            margin: 0;
            text-align: center;
          }
          .answer-form__content {
            padding: 32px 48px;
            height: 347px;
            overflow: auto;
          }
          .answer-form__btn {
            color: #707070;
            cursor: pointer;
            margin-top: 16px;
          }
        `}
      </style>
    </div>
  );
};

AnswerInput.propTypes = {
  numChoices: PropTypes.number.isRequired,
  idx: PropTypes.number,
};

export default connectStore(AnswerInput);
