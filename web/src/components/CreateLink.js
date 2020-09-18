import React, { useState } from 'react';
import { resolve } from 'styled-jsx/css';

function CreateLink() {
  const [inputs, setInputs] = useState({
    lecture: '',
    subject: '',
    time: '',
  });

  const { lecture, subject, time } = inputs; // 구조분해를 통해서 객체 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, //  spread를 사용하여 기존 객체 복사
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${lecture} ${subject} ${time}`);
    onReset();
  };

  const onReset = () => {
    setInputs({
      lecture: '',
      subject: '',
      time: '',
    });
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="input-group">
          <input name="lecture" placeholder="강의명" onChange={onChange} value={lecture} />
          <input name="subject" placeholder="과목명" onChange={onChange} value={subject} />
          <input name="time" placeholder="제한시간" onChange={onChange} value={time} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            링크생성
          </button>
        </div>
      </form>
    </nav>
  );
}

export default CreateLink;
