import React from 'react';
import classNames from 'classnames';

const AnswerItem = ({ answer, onToggle }) => {
  const { checked, id } = answer;
  return (
    <div className="answer-listitem" onClick={() => onToggle(id)}>
      <div>
        <span className={classNames('dot', checked && 'selected')} />
        <p>{id}</p>
      </div>

      <style jsx>
        {`
          .answer-listitem {
            padding-bottom: 18px;
            cursor: pointer;
          }
          .answer-listitem > div {
            display: flex;
            align-items: center;
          }
          .answer-listitem p {
            margin: 0 8px;
            color: #707070;
          }
          .dot {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            display: inline-block;
            border: solid 2px #707070;
          }
          .selected {
            background-color: #707070;
          }
        `}
      </style>
    </div>
  );
};

export default AnswerItem;
