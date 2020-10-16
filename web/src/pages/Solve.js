import React from 'react';
import SolveExam from '@/components/SolveExam';
import SolveWelcome from '@/components/SolveWelcome';
import SolveLogin from '@/components/SolveLogin';
import connectStore from '@/hoc/connectStore';
import { EXAM } from '@/const';

const Solve = ({ exam }) => {
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

  return getContent();
};

export default connectStore(Solve);
