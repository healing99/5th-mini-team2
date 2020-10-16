import React from 'react';
import ExamInfo from '@/components/ExamInfo';
import ResultScore from '@/components/ResultScore';
import connectStore from '@/hoc/connectStore';

const Result = ({ exam: { info } }) => {
  return (
    <>
      <ExamInfo info={info} readOnly />
      <main className="container">
        <ResultScore name="홍길동" score={80} />
      </main>
    </>
  );
};

export default connectStore(Result);
