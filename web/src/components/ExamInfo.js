import React from 'react';
import classNames from 'classnames';

const ExamInfo = ({ classTitle = '기본 이름', testName = '기본 시험지', testTime = '기본 시간' }) => {
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
            <span className="text">{testTime}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .exam-info {
          height: 70px;
          background-color: #b0d5e5;
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

export default ExamInfo;
