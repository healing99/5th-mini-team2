import React, { useState, useRef } from 'react';

const CreateLink = () => {
  const submitButton = useRef();
  const [inputs, setInputs] = useState({
    lecture: '',
    subject: '',
    time: '',
  });

  //수업명과 과목명 입력받기
  const { lecture, subject, time } = inputs;
  const handleValueChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //버튼 누르면 값을 콘솔창에서 확인할 수 있도록
  const handleSubmit = (e) => {
    e.preventDefault();
    if (`${lecture}` === '' || `${subject}` === '' || `${time}` === '') {
      alert('내용을 입력하세요');
    } else {
      console.log(`${lecture} ${subject} ${time}`);
      resetInputs();
    }
    submitButton.current.blur();
  };

  //버튼 누른 후 입력창 초기화 되도록
  const resetInputs = () => {
    setInputs({
      lecture: '',
      subject: '',
      time: '',
    });
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
              className="form-control textField-lecture"
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
              className="form-control textField-subject"
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
              type="number"
              className="form-control textField-time"
              name="time"
              onChange={handleValueChange}
              value={time}
            />
          </div>
          <button type="submit" className="btn btn-secondary" ref={submitButton}>
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
          .textField-lecture {
            width: 136px;
            height: 48px;
          }
          .textField-subject {
            width: 306px;
            height: 48px;
          }
          .textField-time {
            width: 144px;
            height: 48px;
          }
        `}
      </style>
    </div>
  );
};

export default CreateLink;
