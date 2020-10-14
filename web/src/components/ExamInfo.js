import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

const ExamInfo = ({ info }) => {
  const { classTitle, testName, testTime } = info;

  let startingMinutes = 30; //testTime으로 초기화하기
  let totalTime = startingMinutes * 60;
  const [time, setTime] = useState(totalTime);
  const [minutes, setMinutes] = useState(startingMinutes);
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
    setTime((time) => time - 1);
  };

  useEffect(() => {
    if (time == -1) {
      submitExam();
      return;
    }
    var timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const history = useHistory();
  const submitExam = () => {
    alert('시험이 종료되었습니다');
    history.push('/welcome');
  };

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
            <span className="text">
              {minutes} : {seconds}
            </span>
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

ExamInfo.propTypes = {
  classTitle: PropTypes.string,
  testName: PropTypes.string,
  testTime: PropTypes.string,
};
export default ExamInfo;
