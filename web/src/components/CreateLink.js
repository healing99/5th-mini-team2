import React, { useState } from 'react';
import { resolve } from 'styled-jsx/css';

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
    <div className="divStyle">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="text-group">클래스명 입력</div>
            </div>
            <input type="text" className="form-control" name="lecture" onChange={handleValueChange} value={lecture} />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="text-group">종목 입력</div>
            </div>
            <input type="text" className="form-control" name="subject" onChange={handleValueChange} value={subject} />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="text-group">시간(분) 입력</div>
            </div>
            <input
              type="text"
              className="form-control text-field"
              name="time"
              onChange={handleTimeValueChange}
              value={time}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            링크생성
          </button>
        </form>
      </nav>

      <style jsx>
        {`
          .text-group {
            margin: 5px 10px 5px 100px;
          }
          button {
            margin-left: 100px;
            border-radius: 50px;
          }
          .text-field {
            width: 100px;
          }
          nav {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default CreateLink;
