import React, { useState } from 'react';
import CreateExamForm from '@/components/CreateExamForm';
import Question from '@/components/Question';
import Modal from '@/components/Modal';
import connectStore from '@/hoc/connectStore';

const Create = ({ questions, actions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const questionList = () =>
    questions.map((question, idx) => <Question idx={idx} key={question.id} question={question} />);

  return (
    <div className="create">
      <CreateExamForm openModal={openModal} />
      <div className="pad" />

      <main className="container">
        {questionList()}
        <div className="add-button">
          <button onClick={() => actions.addQuestion()} type="button" className="btn btn-outline-primary rounded-pill">
            + 문제 추가
          </button>
        </div>
      </main>

      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />

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
