import React from 'react';

const AnswerItem = ({ answer, onToggle }) => {
  const { checked, id } = answer;
  return (
    <div className="answer-listitem">
      <div className="answer-listitem__circle" onClick={() => onToggle(id)}>
        {checked ? <i className="fas fa-circle"></i> : <i className="far fa-circle"></i>}
        <span className="answer-listitem__number">{id}</span>
      </div>

      <style jsx>
        {`
          .answer-listitem {
            padding-bottom: 18px;
            cursor: pointer;
          }
          .answer-listitem__circle {
            font-size: 16px;
          }
          .answer-listitem__number {
            padding-left: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default AnswerItem;
