import React from 'react';
import PropTypes from 'prop-types';

function ExamRemaining({ current, remain }) {
  return (
    <div className="exam-remaining">
      <span className="current">현재 {current}문제 </span>
      <span className="dash"></span>
      <span className="remaining">남은 {remain}문제 </span>

      <style jsx>{`
        .exam-remaining {
          padding: 8px 16px;
          background-color: #8ec2dc;
          font-size: 14px;
        }
        .exam-remaining .current {
          color: #fff;
        }
        .exam-remaining .remaining {
          color: #6c6c6c;
          border: 3px;
        }
        .exam-remaining .dash {
          margin: 0px 8px;
          border-left: 2px solid #6c6c6c;
        }
      `}</style>
    </div>
  );
}

ExamRemaining.propTypes = {
  current: PropTypes.number.isRequired,
  remain: PropTypes.number.isRequired,
};

export default ExamRemaining;
