import React, { useCallback, useRef, useState } from 'react';
import Button from './Button';
import AnswerList from './AnswerList';

const AnswerInput = () => {
  const [answers, setAnswers] = useState([
    {
      id: 1,
      checked: false,
    },
    {
      id: 2,
      checked: false,
    },
    {
      id: 3,
      checked: false,
    },
    {
      id: 4,
      checked: false,
    },
    {
      id: 5,
      checked: false,
    },
  ]);

  const nextId = useRef(6);

  const onInsert = useCallback(() => {
    const answer = {
      id: nextId.current,
      checked: false,
    };
    setAnswers(answers.concat(answer));
    nextId.current += 1;
  }, [answers]);

  const onToggle = useCallback(
    (id) => {
      setAnswers(answers.map((answer) => (answer.id === id ? { ...answer, checked: !answer.checked } : answer)));
    },
    [answers]
  );

  return (
    <div className="answer-form">
      <div className="answer-form__nav">
        <div className="answer-form__title">채점용 정답 입력</div>
      </div>
      <div className="answer-form__content">
        <AnswerList answers={answers} onToggle={onToggle} />
        <Button onClick={onInsert}>번호추가+</Button>
      </div>

      <style jsx>
        {`
          .answer-form {
            width: 326px;
            height: 444px;
            background-color: #f2f2f2;
          }
          .answer-form__nav {
            height: 50px;
            background-color: #d4d4d4;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .answer-form__title {
            width: 124px;
            height: 25px;
            font-size: 18px;
            line-height: 1.22;
            letter-spacing: -0.9px;
            color: #6c6c6c;
          }
          .answer-form__content {
            padding: 33px 51px;
          }
        `}
      </style>
    </div>
  );
};

export default AnswerInput;
