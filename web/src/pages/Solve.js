import React from 'react';
import QuestionInfo from '@/components/QuestionInfo';
import CurrentRemainQuestion from '@/components/CurrentRemainQuestion';
import QuestionImg from '@/components/QuestionImg';

const Solve = () => {
  return (
    <div className="wrapper">
      <div className="question-info col">
        <QuestionInfo />
      </div>
      <div className="container">
        <div className="row">
          <span className="col-7" />
          <span className="col-2 current-remain-question">
            <CurrentRemainQuestion />
          </span>
        </div>

        <div className="row">
          <div className="col-9 question-img">
            <QuestionImg />
          </div>
          <div className="col omr"></div>
        </div>

        <div className="row">
          <div className="col-9 previous-next-wrapper">
            <input className="mr-3" type="button" value="이전" onclick="" />
            <input className="ml-3" type="button" value="다음" onclick="" />
          </div>
          <div className="col">
            <input className="w-100" type="button" value="답안지 전송" onclick="" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .question-info {
            width: 1920px;
            height: 90px;
            background-color: #b0d5e5;
            padding: 20px 10px;
          }
          .current-remain-question {
            margin: 40px 0px 10px 0px;
            padding: 10px 10px 10px 10px;

            width: 214px;
            height: 46px;
            border-radius: 1px;
            background-color: #b0d5e5;
          }
          .question-img {
            margin: 0px 20px 30px 20px;
            width: 1170px;
            height: 604px;
            border: solid 1px #707070;
            background-color: #f2f2f2;
          }
          .omr {
            margin: 0px 0px 20px 10px;
            width: 210px;
            height: 604px;
            border: solid 1px #707070;
          }

          .previous-next-wrapper {
            text-align: center;
          }
          .previous {
            background-color: green;
          }
          .next {
            background-color: purple;
          }
          .send {
            background-color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Solve;
