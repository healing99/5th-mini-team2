import React from 'react';

const ResultScore = ({ name, score }) => {
  return (
    <div className="result-score">
      <div className="score">
        <span>{name}</span>
        <span className="text">님의 점수</span>
      </div>
      <div className="circle">
        <span>{score}</span>
        <span>점</span>
      </div>
      <style jsx>{`
        .result-score {
          padding: 64px 0px 32px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .result-score .score .text {
          color: #707070;
        }
        .result-score .score {
          color: #4893c4;
          font-weight: bold;
          font-size: 20px;
        }
        .result-score .circle {
          border-radius: 50%;
          border: solid 4px #4893c4;
          height: 185px;
          width: 185px;
          margin: 32px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4893c4;
          font-weight: bold;
        }
        .result-score .circle span:first-child {
          font-size: 48px;
          margin: 0px 4px;
        }
      `}</style>
    </div>
  );
};

export default ResultScore;
