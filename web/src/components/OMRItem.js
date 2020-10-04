import React from 'react';
import PropTypes from 'prop-types';

const OMRItem = ({ type, num }) => {
  const getMultipleChoices = (num) => (
    <div>
      {Array(num)
        .fill(0)
        .map((_, idx) => (
          <span key={idx} className="dot" />
        ))}
    </div>
  );
  const getShortAnswer = () => (
    <div className="short-answer">
      <p>직접입력</p>
    </div>
  );

  const getItem = () => {
    if (type === 0) return getMultipleChoices(5);
    if (type === 1) return getShortAnswer();
  };
  return (
    <div className="omr-item">
      <span className="num text-center">{num}</span>
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
  num: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
};
export default OMRItem;
