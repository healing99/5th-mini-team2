import React from 'react';

const ExamImage = ({ question }) => {
  if (!question) return null;

  return (
    <>
      <img src={question.img} />
      <style jsx>{`
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      `}</style>
    </>
  );
};

export default ExamImage;
