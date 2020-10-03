import React from 'react';
import classNames from 'classnames';

function QuestionInfo({ classTitle = '기본 이름', testName = '기본 시험지', testTime = '기본 시간' }) {
  return (
    <nav className="wrapper">
      <div className={classNames('container', 'navbar')}>
        <div className={classNames('title-root', 'row')}>
          <div className="col-3">
            <span className="rounded-box">CLASS</span>
            <span className="text">{classTitle}</span>
          </div>
          <div className="col-4">
            <span className="rounded-box">시험 종목</span>
            <span className="text">{testName}</span>
          </div>
          <div className="col-3">
            <span className="rounded-box">시험 시간</span>
            <span className="text">{testTime}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          height: 70px;
          background-color: #b0d5e5;
          color: #fff;
        }  
        .container {
          height: 100%;
        }
        .title-root { 
          width: 100%;
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
}

export default QuestionInfo;
