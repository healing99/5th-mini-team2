import React, { useCallback, useRef, useState } from 'react';
import Button from './Button';

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

  const AnswerList = ({ answers, onToggle }) => {
    return (
      <div className="AnswerList">
        {answers.map((answer) => (
          <AnswerListItem answer={answer} key={answer.id} onToggle={onToggle} />
        ))}
      </div>
    );
  };

  const AnswerListItem = ({ answer, onToggle }) => {
    const { checked, id } = answer;
    return (
      <div className="AnswerListItem">
        <div className="circle" onClick={() => onToggle(id)}>
          {checked ? <i class="fas fa-circle"></i> : <i class="far fa-circle"></i>}
          <span className="number">{id}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="answer-form">
      <div className="answer-form__title">채점용 정답 입력</div>
      <AnswerList answers={answers} onToggle={onToggle} />
      <Button onClick={onInsert}>번호추가</Button>
    </div>
  );
};

export default AnswerInput;
