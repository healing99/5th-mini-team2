import React, { useState, useRef } from 'react';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { REG_EXP } from '@/const';
import TestyImg from '@/assets/images/testy.png';
import backgroundImg from '@/assets/images/background.png';
import connectStore from '@/hoc/connectStore';

const SolveLogin = ({ actions }) => {
  const loginButton = useRef();
  const [inputs, setInputs] = useState({
    userId: '',
    academyCode: '',
  });
  const { userId, academyCode } = inputs;
  const handleValueChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !academyCode) {
      alert('내용을 입력하세요');
      return;
    }

    actions.signIn(inputs);
    loginButton.current.blur();
  };

  return (
    <div className="bg">
      <div className="container">
        <p>시험관리 온라인 서비스</p>
        <form onSubmit={handleSubmit} className="col" align="center">
          <img className="testy-img" src={TestyImg} />

          <div className="row">
            <TextField
              onChange={handleValueChange}
              value={inputs.userId}
              name="userId"
              placeholder="이름"
              style={{ width: '390px', height: '40px', borderRadius: '22px', marginRight: '30px' }}
            />
          </div>
          <div className="row">
            <TextField
              onChange={handleValueChange}
              pattern={REG_EXP.NUMBER}
              value={inputs.academyCode}
              name="academyCode"
              placeholder="학원코드입력"
              style={{ width: '390px', height: '40px', borderRadius: '22px', marginRight: '30px' }}
            />
          </div>
          <div className="row justify-content-center">
            <Button
              onClick={handleSubmit}
              ref={loginButton}
              type="submit"
              style={{
                width: '390px',
                height: '40px',
                backgroundColor: '#e4cd84',
                border: 'none',
                borderRadius: '22px',
              }}>
              <span className="button-text">로그인</span>
            </Button>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .bg {
            display: flex;
            background-image: url(${backgroundImg});
            height: 100vh;
            background-size: cover;
          }
          .testy-img {
            margin-bottom: 40px;
          }
          p {
            text-align: center;
            font-size: 20px;
            line-height: 1.45;
            letter-spacing: -1px;
            color: #ddeaf6;
          }
          .container {
            margin-top: 150px;
            width: 500px;
            justify-content: center;
          }
          .row:nth-child(3) {
            margin-top: 10px;
            margin-bottom: 48px;
          }
          .button-text {
            color: #fff;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default connectStore(SolveLogin);
