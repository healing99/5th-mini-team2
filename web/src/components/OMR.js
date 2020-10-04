import React from 'react';
import OMRItem from './OMRItem';

const OMR = () => {
  return (
    <div className="omr">
      <div className="title">
        <span>OMR</span>
      </div>
      <div className="items">
        <OMRItem num={2} type={1} />
        <OMRItem num={1} type={0} />
        <OMRItem num={1} type={0} />
        <OMRItem num={1} type={0} />
        <OMRItem num={1} type={0} />
        <OMRItem num={1} type={0} />
      </div>
      <style jsx>{`
        .omr {
          border: solid 1px #707070;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .omr .title {
          background-color: #b0d5e5;
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
