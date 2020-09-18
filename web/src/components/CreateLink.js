import React, { useState } from 'react';
import { resolve } from 'styled-jsx/css';

const CreateLink = () => {
  const [time, setTime] = useState('');
  const [inputs, setInputs] = useState({
    lecture: '',
    subject: '',
    isTimeValid: false,
  });

  //수업명과 과목명 입력받기
  const { lecture, subject } = inputs;
  const handleValueChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //시간 입력받기(숫자만 입력받을 수 있도록 따로 만들었습니다)
  const handleTimeValueChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setTime(e.target.value);
    }
  };

  //버튼 누르면 값을 콘솔창에서 확인할 수 있도록
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${lecture} ${subject} ${time}`);
    onReset();
  };

  //버튼 누른 후 입력창 초기화 되도록
  const onReset = () => {
    setInputs({
      lecture: '',
      subject: '',
    });
    setTime('');
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              클래스명 입력
            </span>
          </div>
          <input type="text" className="form-control" name="lecture" onChange={handleValueChange} value={lecture} />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              종목 입력
            </span>
          </div>
          <input type="text" className="form-control" name="subject" onChange={handleValueChange} value={subject} />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              시간 입력(분)
            </span>
          </div>
          <input
            type="text"
            className="form-control form-third"
            name="time"
            onChange={handleTimeValueChange}
            value={time}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          링크생성
        </button>
      </form>
      <style jsx>
        {`
          .form-third {
            width: 144px;
          }
          .navbar-light {
            width: 100%;
            color: red;
          }
        `}
      </style>
    </nav>

    // <nav className="navbar navbar-light bg-light">
    //   <form onSubmit={handleSubmit} className="form-inline">
    //     <div className="input-group">
    //       <input type="text" className="myInput" name="lecture"  onChange={handleValueChange} value={lecture} />
    //       <input type="text" className="myInput"name="subject" onChange={handleValueChange} value={subject} />
    //       <input type="text" className="myInput"name="time" onChange={handleTimeValueChange} value={time} />
    //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
    //         링크생성
    //       </button>
    //     </div>
    //   </form>
    // </nav>
  );
};

export default CreateLink;
