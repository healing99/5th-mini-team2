import React from 'react';
import Button from '@/components/Button';
import backgroundImg from '@/assets/images/background.png';

const Welcome = () => {
  const handleStartButton = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg">
      <div className="container">
        <div className="profile-circle" />
        <div className="col">
          <div className="row">
            <div className="title">홍길동 학생, 어서오세요!</div>
          </div>
          <div className="row">
            <div className="test-content">CLASS</div>
            <div className="test-info">둘리반 심화</div>
          </div>
          <div className="row">
            <div className="test-content">시험명</div>
            <div className="test-info">국어 {'>'} 문법 심화</div>
          </div>
          <div className="row">
            <div className="test-content">시험시간</div>
            <div className="test-info">60분</div>
          </div>
          <div className="row">
            <Button
              onClick={handleStartButton}
              type="submit"
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
          .test-content {
            display: flex;
            width: 43%;
            justify-content: center;
            padding-top: 10px;
            background-color: #c2dae5;
          }
          .test-info {
            justify-content: center;
            padding-top: 10px;
            padding-left: 15px;
          }
          .row:nth-child(2n) {
            background-color: #9ec6db;
            height: 43px;
            margin-top: 6px;
            margin-bottom: 6px;
            color: #585858;
          }
          .row:nth-child(3) {
            background-color: #9ec6db;
            height: 43px;
            margin-top: 6px;
            margin-bottom: 6px;
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

export default Welcome;
