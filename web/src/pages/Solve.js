import React, { useEffect, useState } from 'react';
import SolveExam from '@/components/SolveExam';
import SolveWelcome from '@/components/SolveWelcome';
import SolveLogin from '@/components/SolveLogin';
import OMRModal from '@/components/OMRModal';

const Solve = ({ match }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    // const { id } = match.params;
    // actions.getExam(id);
  }, []);

  return (
    <div>
      <SolveLogin />
      <OMRModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Solve;
