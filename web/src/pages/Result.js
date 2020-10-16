import React from 'react';
import { Redirect } from 'react-router-dom';
import ExamInfo from '@/components/ExamInfo';
import ResultScore from '@/components/ResultScore';
import ResultTable from '@/components/ResultTable';
import Box from '@/components/Box';
import connectStore from '@/hoc/connectStore';

const Result = ({ exam: { info, graded }, student }) => {
  const getScore = () => Math.floor((graded.corrects / (graded.corrects + graded.incorrects)) * 100);

  if (graded.questions.length === 0) return <Redirect to="/" />;
  return (
    <>
      <ExamInfo info={info} readOnly />
      <main className="container">
        <ResultScore name={student.name} score={getScore()} />
        <Box items={[`정답 ${graded.corrects}문제`, `오답 ${graded.incorrects}문제`, '소요시간 54분']} />

        <div className="pad" />
        <ResultTable gradedQuestions={graded.questions} />

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
