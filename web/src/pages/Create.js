import React from 'react';
import CreateExamForm from '@/components/CreateExamForm';
import Question from '@/components/Question';

/**
 * @todo 임시 data를 받아 question component에 넘겨준다.
 */
const Create = () => {
  return (
    <div>
      <CreateExamForm />
      <div className="main-pad" />

      <main className="container">
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <Question key={idx} />
        ))}
      </main>

      <style jsx>{`
        .main-pad {
          padding-top: 64px;
        }
      `}</style>
    </div>
  );
};

export default Create;
