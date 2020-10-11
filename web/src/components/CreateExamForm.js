import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { REG_EXP } from '@/const';
import classNames from 'classnames';

const CreateExamForm = ({ handleSubmit, info, handleChange }) => {
  return (
    <nav className="exam-form">
      <div className={classNames('container', 'navbar')}>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-3">
            <TextField
              onChange={({ target: { value } }) => handleChange('className', value)}
              value={info.className}
              name="lecture"
              label="클래스명 입력"
            />
          </div>
          <div className="col-4">
            <TextField
              onChange={({ target: { value } }) => handleChange('examName', value)}
              value={info.examName}
              name="subject"
              label="제목 입력"
            />
          </div>
          <div className="col-3">
            <TextField
              pattern={REG_EXP.NUMBER}
              onChange={({ target: { value } }) => handleChange('limitTime', value)}
              value={info.limitTime}
              name="time"
              label="시간 입력"
            />
          </div>
          <div className={classNames('col', 'btn-wrapper')}>
            <Button type="submit" color="primary" onClick={handleSubmit}>
              링크 생성
            </Button>
          </div>
        </form>
      </div>

      <style jsx global>
        {`
          .exam-form {
            background-color: #b0d5e5;
            color: #fff;
            height: 70px;
          }
          .exam-form .navbar {
            padding: 1rem 0 !important;
          }
          .exam-form label {
            font-weight: bold;
          }
          .exam-form input {
            border-radius: 24px;
          }
          .exam-form .btn-wrapper {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </nav>
  );
};

CreateExamForm.propTypes = {
  handleSubmit: PropTypes.func,
  info: PropTypes.object,
  handleChange: PropTypes.func,
};
export default CreateExamForm;
