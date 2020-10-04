import React, { useState } from 'react';
import CreateExamForm from '@/components/CreateExamForm';
import Question from '@/components/Question';
import Modal from '@/components/Modal';

const Create = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="create">
      <CreateExamForm openModal={openModal} />
      <div className="pad" />

      <main className="container">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <Question key={idx} />
        ))}
        <div className="add-button">
          <button type="button" className="btn btn-outline-primary rounded-pill">
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

export default Create;
