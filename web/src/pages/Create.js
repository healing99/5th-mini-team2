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
      </main>
      <Button>문제추가</Button>

      {/* 모달테스트 */}
      <div>
        {/* <button onClick={openModal}>modal test</button> */}
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>

      <style jsx>{`
        .main-pad {
          padding-top: 64px;
        }
        .container {
          padding-bottom: 64px;
        }
      `}</style>
    </div>
  );
};

export default Create;
