import React, { useState } from 'react';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import iconStudent from '@/assets/images/iconStudent.png';
import iconTest from '@/assets/images/iconTest.png';
import iconAcademy from '@/assets/images/iconAcademy.png';
import banner from '@/assets/images/banner.png';

const Main = ({ history }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  //로그인과 회원가입
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-container">
      <div className="first-container" align="center">
        <div className="spanText">
          <span className="loginButton" onClick={handleLogin}>
            로그인
          </span>
          <span className="signupButton" onClick={handleSignUp}>
            회원가입
          </span>
        </div>
        <div className="title">
          테스티와 함께 <br />
          시험지 제작과 학생관리를 한번에!
        </div>
        <div className="sub-title">
          교사의 시험지 제작을 손쉽게 도와주는 신개념 문제제작 서비스를
          <br /> 지금바로 만나보세요
        </div>
        <div className="searchTextField">
          <TextField
            onChange={handleValueChange}
            value={searchValue}
            name="searchValue"
            placeholder="족보 검색"
            style={{ borderRadius: '22px' }}></TextField>
        </div>
      </div>

      <div className="second-container">
        <div className="row">
          <div className="col">
            <div>
              <img className="icon" src={iconStudent} />
            </div>
            <Button
              color="light"
              style={{
                marginTop: '20px',
                width: '120px',
                height: '40px',
                borderRadius: '29px',
                border: 'solid 2px #707070',
              }}>
              학생관리
            </Button>
          </div>
          <div className="col">
            <div>
              <img className="icon" src={iconTest}></img>
            </div>
            <Button
              onClick={() => history.push('/create')}
              color="light"
              style={{
                marginTop: '20px',
                width: '120px',
                height: '40px',
                borderRadius: '29px',
                border: 'solid 2px #707070',
              }}>
              시험지제작
            </Button>
          </div>
          <div className="col">
            <div>
              <img className="icon" src={iconAcademy}></img>
            </div>
            <Button
              color="light"
              style={{
                marginTop: '20px',
                width: '120px',
                height: '40px',
                borderRadius: '29px',
                border: 'solid 2px #707070',
              }}>
              학원관리
            </Button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            height: 100vh;
          }
          .spanText {
            display: flex;
            justify-content: flex-end;
            margin-right: 230px;
          }
          .loginButton {
            cursor: pointer;
            color: #ffffff;
            margin-top: 30px;
            font-size: 15px;
          }
          .signupButton {
            cursor: pointer;
            color: #ffffff;
            margin-top: 30px;
            margin-left: 20px;
            font-size: 15px;
          }
          .first-container {
            height: 48%;
            background-image: url(${banner});
            background-position: center top;
          }
          .title {
            padding-top: 90px;
            font-size: 26px;
            font-weight: bold;
            line-height: 1.47;
            color: #ffffff;
          }
          .sub-title {
            padding-top: 10px;
            padding-bottom: 20px;
            font-size: 15px;
            line-height: 1.45;
            letter-spacing: -1px;
            color: #c5ddf3;
          }
          .searchTextField {
            width: 498px;
          }
          .second-container {
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            height: 52%;
          }
          .col {
            margin: 80px 25px;
            padding: 50px;
            height: 220px;
            border-radius: 45px;
            box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.06);
            background-color: #ffffff;
          }
          .icon {
            margin-left: 15px;
            width: 100px;
            height: 80px;
          }
        `}
      </style>
    </div>
  );
};

export default Main;
