import React from 'react';
import PropTypes from 'prop-types';

function CurrentRemainQuestion({ current, remain }) {
  return (
    <div className="remain-wrapper">
      <span className="current">현재 {current}문제 </span>
      <span className="dash"></span>
      <span className="remaining">남은 {remain}문제 </span>

      <style jsx>{`
        .remain-wrapper {
          padding: 8px 16px;
          background-color: #b0d5e5;
          font-size: 14px;
        }
        .current {
          color: #fff;
        }
        .remaining {
          color: #6c6c6c;
          border: 3px;
        }
        .dash {
          margin: 0px 8px;
          border-left: 2px solid #6c6c6c;
        }
      `}</style>
    </div>
  );
}

CurrentRemainQuestion.propTypes = {
  current: PropTypes.number.isRequired,
  remain: PropTypes.number.isRequired,
};

export default CurrentRemainQuestion;
