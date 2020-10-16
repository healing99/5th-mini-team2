import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ExamInfo = ({ info }) => {
  const { classTitle, testName, testTime } = info;

  return (
    <nav className="exam-info">
      <div className={classNames('container', 'navbar')}>
        <div className={classNames('title-root', 'row')}>
          <div className="col-3 item">
            <span className="rounded-box">CLASS</span>
            <span className="text">{classTitle}</span>
          </div>
          <div className="col-6 item">
            <span className="rounded-box">시험 종목</span>
            <span className="text">{testName}</span>
          </div>
          <div className="col-3 item">
            <span className="rounded-box">시험 시간</span>
            <span className="text">{`${testTime} 분`}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .exam-info {
          height: 70px;
          background-color: #8ec2dc;
          color: #fff;
        }
        .exam-info .container {
          justify-content: space-between;
          height: 100%;
          padding: 0;
        }
        .exam-info .title-root {
          width: 100%;
        }
        .exam-info .item:first-child {
          text-align: left;
        }
        .exam-info .item:last-child {
          text-align: right;
          padding-right: 0;
        }
        .exam-info .item:nth-child(2) {
          text-align: center;
        }
        .rounded-box {
          border-radius: 24px;
          background-color: #fff;
          color: #6c6c6c;
          padding: 4px 16px;
          margin-right: 16px;
        }
        .text {
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};

ExamInfo.propTypes = {
  classTitle: PropTypes.string,
  testName: PropTypes.string,
  testTime: PropTypes.string,
};
export default ExamInfo;
