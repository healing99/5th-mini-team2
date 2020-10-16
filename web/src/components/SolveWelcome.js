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
  }

  const { info } = exam;
  return (
    <div className="bg">
      <div className="container">
        <div className="profile-circle" />
        <div className="col">
          <div className="row">
            <div className="title">{student.name} 학생, 어서오세요!</div>
          </div>
          <div className="row">
            <div className="test-info">CLASS</div>
            <div>{info.classTitle}</div>
          </div>
          <div className="row">
            <div className="test-info">시험명</div>
            <div>{info.testName}</div>
          </div>
          <div className="row">
            <div className="test-info">시험시간</div>
            <div>{`${info.testTime}분`}</div>
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
      <style jsx>
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
          .row:nth-child(3) {
            line-height: 1.46;
            letter-spacing: -1.3px;
            color: #ffffff;
            white-space: pre;
          }
          .test-info {
            display: flex;
            width: 45%;
            justify-content: center;
          }
          .row:nth-child(2n) {
            background-color: #cee1e9;
            height: 43px;
            padding-top: 8px;
            margin-top: 8px;
            margin-bottom: 10px;
            color: #707070;
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
