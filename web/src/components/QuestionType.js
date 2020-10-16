import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '@/components/ToggleButton';
import connectStore from '@/hoc/connectStore';
import { QUESTION_TYPES } from '@/const';
import RadioIcon from '@/assets/images/radio.png';
import ShortAnswerIcon from '@/assets/images/shortAnswer.png';
import LongAnswerIcon from '@/assets/images/longAnswer.png';

function QuestionType({ type, idx, actions }) {
  return (
    <div className="question-type">
      <ToggleButton
        checked={type === QUESTION_TYPES.MULTIPLE_CHOICE}
        onChange={() => actions.changeQuestionType(idx, QUESTION_TYPES.MULTIPLE_CHOICE)}>
        <img className="toggle-img" src={RadioIcon} width="20" />
        객관식
      </ToggleButton>

      <ToggleButton
        onChange={() => actions.changeQuestionType(idx, QUESTION_TYPES.LONG_ANSWER)}
        checked={type === QUESTION_TYPES.LONG_ANSWER}>
        <img className="toggle-img" src={LongAnswerIcon} width="20" />
        서술형
      </ToggleButton>

      <ToggleButton
        onChange={() => actions.changeQuestionType(idx, QUESTION_TYPES.SHORT_ANSWER)}
        checked={type === QUESTION_TYPES.SHORT_ANSWER}>
        <img className="toggle-img" src={ShortAnswerIcon} width="20" />
        단답형
      </ToggleButton>

      <style jsx>{`
        .question-type {
          margin: 32px 0px 16px 0px;
        }
        .toggle-img {
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
}

QuestionType.propTypes = {
  type: PropTypes.number.isRequired,
  idx: PropTypes.number,
};

export default connectStore(QuestionType);
