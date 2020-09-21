import React from 'react';

const AnswerListItem = ({ answer, onToggle }) => {
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
          }
          .answer-listitem__circle {
            font-size: 22px;
          }
          .answer-listitem__number {
            padding-left: 10px;
          }
        `}
      </style>
    </div>
  );
};

const AnswerList = ({ answers, onToggle }) => {
  return (
    <div>
      {answers.map((answer) => (
        <AnswerListItem answer={answer} key={answer.id} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default AnswerList;
