import React, { useState } from 'react';
import Button from './Button';

const CreateLink = () => {
  const [time, setTime] = useState('');
  const [inputs, setInputs] = useState({
    lecture: '',
    subject: '',
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

  //시간 입력받기(숫자만 입력받을 수 있도록 따로 분리)
  const handleTimeValueChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setTime(e.target.value);
    }
  };

  //버튼 누르면 값을 콘솔창에서 확인할 수 있도록
  const handleSubmit = (e) => {
    e.preventDefault();
    if (`${lecture}` == '' || `${subject}` == '' || `${time}` == '') {
      alert('내용을 입력하세요');
    } else {
      console.log(`${lecture} ${subject} ${time}`);
      onReset();
    }
    document.getElementById('myButton').blur();
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
    <div className="top-nav">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="div-group">클래스명 입력</div>
            </div>
            <input
              type="text"
              className="form-control text-field-first"
              name="lecture"
              onChange={handleValueChange}
              value={lecture}
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="div-group">종목 입력</div>
            </div>
            <input
              type="text"
              className="form-control text-field-second"
              name="subject"
              onChange={handleValueChange}
              value={subject}
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="div-group">시간 입력</div>
            </div>
            <input
              type="text"
              className="form-control text-field-third"
              name="time"
              onChange={handleTimeValueChange}
              value={time}
            />
          </div>
          <button type="submit" className="btn btn-secondary" id="myButton">
            링크생성
          </button>
        </form>
      </nav>

      <style jsx>
        {`
          .div-group {
            margin: 10px 10px 10px 100px;
          }
          .btn-secondary {
            margin-left: 100px;
            width: 146px;
            height: 50px;
            border-radius: 25px;
          }
          .text-field-first {
            width: 136px;
            height: 48px;
          }
          .text-field-second {
            width: 306px;
            height: 48px;
          }
          .text-field-third {
            width: 144px;
            height: 48px;
          }
        `}
      </style>
    </div>
  );
};

export default CreateLink;
