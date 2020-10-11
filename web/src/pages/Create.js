import React, { useState } from 'react';
import CreateExamForm from '@/components/CreateExamForm';
import Question from '@/components/Question';
import QuestionModal from '@/components/QuestionModal';
import connectStore from '@/hoc/connectStore';

const Create = ({ questions, actions }) => {
  const [modalOpen, setModal] = useState(false);
  const [info, setInfo] = useState({
    className: '',
    examName: '',
    limitTime: '',
  });

  const questionList = () =>
    questions.map((question, idx) => <Question idx={idx} key={question.id} question={question} />);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { className, examName, limitTime } = info;
    if (!className || !examName || !limitTime) {
      alert('시험지 정보를 입력해주세요.');
      return;
    }

    let flagQuestion = false;
    Object.entries(questions).forEach(([_, question]) => {
      const { image, answer } = question;
      if (!image || !answer.length) flagQuestion = true;
    });
    if (flagQuestion) {
      alert('잘못된 질문 형식입니다.');
      return;
    }

    actions.createExam(info, questions);
  };

  const handleInfo = (id, value) => {
    setInfo({
      ...info,
      [id]: value,
    });
  };

  return (
    <div className="create">
      <CreateExamForm handleChange={handleInfo} info={info} handleSubmit={handleSubmit} />
      <div className="pad" />

      <main className="container">
        {questionList()}
        <div className="add-button">
          <button onClick={() => actions.addQuestion()} type="button" className="btn btn-outline-primary rounded-pill">
            + 문제 추가
          </button>
        </div>
      </main>

      <QuestionModal isModalOpen={modalOpen} closeModal={() => setIsModalOpen(false)} />

      <style jsx global>{`
        .create {
          min-height: 100vh;
        }
        .create .container {
          padding-bottom: 64px;
        }
        .create .pad {
          padding-top: 64px;
        }
        .create .add-button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default connectStore(Create);
