import React from 'react';
import ExamInfo from '@/components/ExamInfo';
import ResultScore from '@/components/ResultScore';
import Box from '@/components/Box';
import connectStore from '@/hoc/connectStore';

const Result = ({ exam: { info } }) => {
  return (
    <>
      <ExamInfo info={info} readOnly />
      <main className="container">
        <ResultScore name="홍길동" score={80} />
        <Box items={['정답 12문제', '오답 8문제', '소요시간 54분']} />
      </main>
    </>
  );
};

export default connectStore(Result);
