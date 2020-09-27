import React, { useState } from 'react';
import CreateExamForm from '@/components/CreateExamForm';
import Question from '@/components/Question';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
/**
 * @todo 임시 data를 받아 question component에 넘겨준다.
 */

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
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <Question key={idx} />
        ))}
        <div className="add-button">
          <Button>문제추가</Button>
        </div>
      </main>

      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />

      <style jsx>{`
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
