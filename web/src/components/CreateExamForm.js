import React, { useState, useRef } from 'react';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { REG_EXP } from '@/const/RegExp';
import classNames from 'classnames';

const CreateExamForm = ({ openModal }) => {
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
    if (lecture === '' || subject === '' || time === '') {
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
    <div className="form-wrapper">
      <nav className={classNames('container', 'navbar')}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-3">
              <TextField onChange={handleValueChange} value={inputs.lecture} name="lecture" label="클래스명 입력" />
            </div>
            <div className="col-4">
              <TextField onChange={handleValueChange} value={inputs.subject} name="subject" label="제목 입력" />
            </div>
            <div className="col-3">
              <TextField
                pattern={REG_EXP.Number}
                onChange={handleValueChange}
                value={inputs.time}
                name="time"
                label="시간 입력"
              />
            </div>
            <div className={classNames('col', 'btn-wrapper')}>
              <Button ref={submitButton} type="submit" color="primary" onClick={openModal}>
                링크 생성
              </Button>
            </div>
          </div>
        </form>
      </nav>

      <style jsx global>
        {`
          .navbar {
            padding: 1rem 0 !important;
          }
          .form-wrapper {
            background-color: #b0d5e5;
            color: #fff;
          }
          .form-wrapper label {
            font-weight: bold;
          }
          .form-wrapper input {
            border-radius: 24px;
          }
          .btn-wrapper {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default CreateExamForm;
