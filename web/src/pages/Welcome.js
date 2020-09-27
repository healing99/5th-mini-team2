import React from 'react';
import Button from '@/components/Button';

const Welcome = () => {
  const handleStartButton = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="profileCircle" />
      <div className="col">
        <div className="row">
          <div className="title">홍길동 학생, 어서오세요!</div>
        </div>
        <div className="row ">
          <div>CLASS 둘리반 심화</div>
        </div>
        <div className="row">
          <div>시험명 국어 {'>'} 문법 심화</div>
        </div>
        <div className="row">
          <div className="Time">시험시간 60분</div>
        </div>
        <div className="row">
          <Button
            onClick={handleStartButton}
            type="submit"
            style={{
              width: '354px',
              height: '43px',
              backgroundColor: '#e4cd84',
              border: 'none',
              borderRadius: '22px',
            }}>
            <span style={{ color: '#ffffff', fontWeight: 'bold' }}>시험시작</span>
          </Button>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin-top: 120px;
            width: 430px;
          }
          .profileCircle {
            border: 1px solid;
            width: 100px;
            height: 100px;
            border-radius: 75px;
            margin: 0 auto;
          }
          .row {
            justify-content: center;
          }
          .row:nth-child(2n) {
            background-color: #cee1e9;
            height: 43px;
            padding: 10px;
            margin: 8px;
          }
          .row:nth-child(5) {
            margin-top: 50px;
          }
          .title {
            padding-top: 28px;
            padding-bottom: 40px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: bold;
            line-height: 1.47;
            letter-spacing: -1.7px;
            color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;
