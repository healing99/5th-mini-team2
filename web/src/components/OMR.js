import React from 'react';
import OMRItem from './OMRItem';
import shortid from 'shortid';

const OMR = ({ questions, openModal }) => {
  const omrItemList = () =>
    questions.map((question, idx) => <OMRItem key={shortid()} idx={idx} question={question} openModal={openModal} />);

  return (
    <div className="omr">
      <div className="title">
        <span>OMR</span>
      </div>
      <div className="items">{omrItemList()}</div>

      <style jsx>{`
        .omr {
          border: solid 1px #707070;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .omr .title {
          background-color: #8ec2dc;
          color: #6c6c6c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          flex: 0 0 50px;
        }
        .omr .items {
          height: 100%;
          overflow: auto;
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default OMR;
