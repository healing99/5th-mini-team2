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
            <div className="class-title">CLASS</div>
            <div>둘리반 심화</div>
          </div>
          <div className="row">
            <div className="test-name">시험명</div>
            <div>국어 {'>'} 문법 심화</div>
          </div>
          <div className="row">
            <div className="test-time">시험시간</div>
            <div>60분</div>
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
          .row:nth-child(3) {
            line-height: 1.46;
            letter-spacing: -1.3px;
            color: #ffffff;
            white-space: pre;
          }
          .class-title {
            margin-left: 40px;
            margin-right: 70px;
          }
          .test-name {
            margin-left: 48px;
            margin-right: 70px;
          }
          .test-time {
            margin-left: 33px;
            margin-right: 63px;
          }
          .row:nth-child(2n) {
            background-color: #cee1e9;
            height: 43px;
            padding: 8px;
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

export default Welcome;
