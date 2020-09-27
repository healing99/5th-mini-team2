import React, { useState } from 'react';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import iconStudent from '@/assets/images/iconStudent.png';
import iconTest from '@/assets/images/iconTest.png';
import iconAcademy from '@/assets/images/iconAcademy.png';

const Main = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleValueChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
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
      <span style={{ cursor: 'pointer', marginLeft: '1200px' }} onClick={handleLogin}>
        로그인
      </span>
      <span style={{ cursor: 'pointer', marginLeft: '20px' }} onClick={handleSignUp}>
        회원가입
      </span>
      <div className="first-container" align="center">
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
              <img className="icon" width="100px" height="80px" src={iconStudent} />
            </div>
            <Button
              color="#ffffff"
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
              <img className="icon" width="100px" height="80px" src={iconTest}></img>
            </div>
            <Button
              color="#ffffff"
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
              <img className="icon" width="100px" height="80px" src={iconAcademy}></img>
            </div>
            <Button
              color="#ffffff"
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
          .first-container {
            height: 350px;
            background-image: url('@/assets/images/banner.png');
          }
          .title {
            padding-top: 100px;
            font-size: 28px;
            font-weight: bold;
            line-height: 1.47;
            letter-spacing: -1.9px;
            color: black;
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
            height: 40px;
          }
          .second-container {
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            height: 500px;
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
          }
        `}
      </style>
    </div>
  );
};

export default Main;
