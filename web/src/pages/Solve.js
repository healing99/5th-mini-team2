import React, { useEffect, useState } from 'react';
import SolveExam from '@/components/SolveExam';
import SolveWelcome from '@/components/SolveWelcome';
import SolveLogin from '@/components/SolveLogin';
import OMRModal from '@/components/OMRModal';
import connectStore from '@/hoc/connectStore';
import { EXAM } from '@/const';

const Solve = ({ match, exam }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getContent = () => {
    switch (exam.step) {
      case EXAM.WELCOME_STEP:
        return <SolveWelcome />;
      case EXAM.SOLVE_STEP:
        return <SolveExam />;
      case EXAM.LOGIN_STEP:
      default:
        return <SolveLogin />;
    }
  };

  useEffect(() => {
    // const { id } = match.params;
    // actions.getExam(id);
  }, []);

  return (
    <div>
      {getContent()}
      <OMRModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default connectStore(Solve);
