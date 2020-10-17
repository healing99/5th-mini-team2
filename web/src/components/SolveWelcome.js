import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@/components/Button';
import connectStore from '@/hoc/connectStore';
import backgroundImg from '@/assets/images/background.png';
import { EXAM } from '@/const';

const SolveWelcome = ({ student, exam, actions }) => {
  const { id } = useParams();

  useEffect(() => {
    actions.getExam(id);
  }, []);

  const handleStart = () => {
    actions.setSolveStep(EXAM.SOLVE_STEP);
    actions.startExam();
  };

  const { info } = exam;
  return (
    <div className="bg">
      <div className="container">
        <div className="profile-circle" />
        <div className="col">
          <div className="row">
            <div className="title">{student.name} 학생, 어서오세요!</div>
          </div>
          <div className="row center">
            <div className="col-5 center-item test-content">CLASS</div>
            <div className="col-7 center-item test-info">{info.classTitle}</div>
          </div>
          <div className="row">
            <div className="col-5 center-item test-content">시험명</div>
            <div className="col-7 center-item test-info">{info.testName}</div>
          </div>
          <div className="row">
            <div className="col-5 center-item test-content">시험시간</div>
            <div className="col-7 center-item test-info bold-text">{`${info.testTime}분`}</div>
          </div>
          <div className="row">
            <Button
              onClick={handleStart}
              style={{
                width: '345px',
                height: '43px',
                backgroundColor: '#e4cd84',
                border: 'none',
                borderRadius: '22px',
              }}>
              <span className="button-text">시험시작</span>
            </Button>
          </div>
        </div>
      </div>
      <style jsx scoped>
        {`
          .bg {
            display: flex;
            background-image: url(${backgroundImg});
            height: 100vh;
            background-size: cover;
          }
          .container {
            margin-top: 120px;
            width: 350px;
          }
          .center-item {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .bold-text {
            font-weight: bold;
          }

          .profile-circle {
            width: 100px;
            height: 100px;
            border-radius: 75px;
            margin: 0 auto;
            background-color: #ffffff;
          }
          .row:nth-child(1) {
            justify-content: center;
          }
          .test-content {
            background-color: #c2dae5;
          }
          .test-info {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .row:nth-child(2n) {
            background-color: #9ec6db;
            height: 43px;
            margin: 4px 0px;
            color: #585858;
          }
          .row:nth-child(3) {
            background-color: #9ec6db;
            height: 43px;
            margin: 4px 0px;
            color: #585858;
          }
          .row:nth-child(5) {
            margin-top: 50px;
          }
          .title {
            padding-top: 28px;
            padding-bottom: 30px;
            font-size: 22px;
            font-weight: bold;
            line-height: 1.47;
            letter-spacing: -1.7px;
            color: #ffffff;
          }
          .button-text {
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default connectStore(SolveWelcome);
