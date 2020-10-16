import React from 'react';
import ExamInfo from '@/components/ExamInfo';
import ResultScore from '@/components/ResultScore';
import ResultTable from '@/components/ResultTable';
import Box from '@/components/Box';
import connectStore from '@/hoc/connectStore';

const Result = ({ exam: { info } }) => {
  return (
    <>
      <ExamInfo info={info} readOnly />
      <main className="container">
        <ResultScore name="홍길동" score={80} />
        <Box items={['정답 12문제', '오답 8문제', '소요시간 54분']} />

        <div className="pad" />
        <ResultTable />

        <div className="btn-root">
          <button className="btn btn-outline-secondary rounded-pill">문제 다시보기</button>
          <button className="btn btn-outline-secondary rounded-pill">문제해설</button>
        </div>
      </main>

      <style jsx>{`
        .pad {
          padding: 16px;
        }
        .btn-root {
          display: flex;
          justify-content: flex-end;
          padding: 16px 0px 32px;
        }
        .btn-root button {
          margin: 8px;
        }
      `}</style>
    </>
  );
};

export default connectStore(Result);
