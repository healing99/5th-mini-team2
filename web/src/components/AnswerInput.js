import React, { useCallback, useRef, useState } from 'react';
import AnswerItem from './AnswerItem';

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

  const handleInsert = useCallback(() => {
    const answer = {
      id: nextId.current,
      checked: false,
    };
    setAnswers(answers.concat(answer));
    nextId.current += 1;
  }, [answers]);

  const handleToggle = useCallback(
    (id) => {
      setAnswers(answers.map((answer) => (answer.id === id ? { ...answer, checked: !answer.checked } : answer)));
    },
    [answers]
  );


  return (
    <div className="answer-form">
      <div className="answer-form__nav">
        <p className="answer-form__title">채점용 정답 입력</p>
      </div>
      <div className="answer-form__content">
        {answers.map((answer) => (
          <AnswerItem key={answer.id} answer={answer} onToggle={handleToggle} />
        ))}
        <div onClick={handleInsert} className="answer-form__btn">
          + 번호추가
        </div>
      </div>

      <style jsx>
        {`
          .answer-form {
            width: 326px;
            height: 444px;
            border: solid 1px #707070;
          }
          .answer-form__nav {
            height: 50px;
            background-color: #4893c4;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .answer-form__title {
            width: 100%;
            font-size: 16px;
            color: #fff;
            margin: 0;
            text-align: center;
          }
          .answer-form__content {
            padding: 33px 51px;
          }
          .answer-form__btn {
            color: #707070;
            cursor: pointer;
            margin-top: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default AnswerInput;
