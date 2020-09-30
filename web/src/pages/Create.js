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
    <div>
      <CreateExamForm openModal={openModal} />
      <div className="main-pad" />

      <main className="container">
        {[1].map((_, idx) => (
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
        .main-pad {
          padding-top: 64px;
        }
        .container {
          padding-bottom: 64px;
        }
        .add-button {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default Create;
