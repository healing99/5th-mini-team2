import React, { useState } from 'react';
import ExamInfo from '@/components/ExamInfo';
import ExamRemaining from '@/components/ExamRemaining';
import ExamImage from '@/components/ExamImage';
import OMR from '@/components/OMR';
import connectStore from '@/hoc/connectStore';
import OMRModal from '@/components/OMRModal';

const SolveExam = ({ exam: { info, questions }, actions }) => {
  const [omrModal, setOmrModal] = useState(false);

  return (
    <div className="solve-exam">
      <ExamInfo info={info} />
      <main className="container">
        <div className="row">
          <div className="col-9 remain-root">
            <ExamRemaining current={info.current + 1} remain={info.remain} />
          </div>
        </div>
        <div className="row question-input">
          <div className="col-9 question-img">
            <ExamImage question={questions[info.current]} />
          </div>
          <div className="col-3 omr">
            <OMR questions={questions} openModal={() => setOmrModal(true)} />
          </div>
        </div>
        <div className="row button-wrapper">
          <div className="col-9">
            <button
              type="button"
              onClick={() => actions.prevQuestion()}
              className="btn btn-outline-primary rounded-pill">
              이전
            </button>
            <button type="button" onClick={() => actions.nextQuestion()} className="btn btn-primary rounded-pill">
              다음
            </button>
          </div>
          <div style={{ margin: 0, paddingLeft: 0 }} className="col">
            <button style={{ margin: 0 }} type="button" className="btn btn-primary rounded-pill btn-block">
              답안지 전송
            </button>
          </div>
        </div>
      </main>

      <OMRModal isModalOpen={omrModal} closeModal={() => setOmrModal(false)} />

      <style jsx global>{`
        .solve-exam {
          height: 100vh;
        }
        .solve-exam .omr {
          height: 100%;
        }
        .solve-exam main {
          height: calc(100% - 70px);
          display: flex;
          flex-direction: column;
          padding-top: 48px;
        }
        .solve-exam .question-input {
          flex: 1;
          padding: 16px 0px;
          min-height: 0;
        }
        .solve-exam .button-wrapper {
          text-align: center;
          padding: 16px 0px 62px 0px;
        }
        .solve-exam .button-wrapper * {
          margin: 0px 8px;
        }
        .solve-exam .remain-root {
          display: flex;
          justify-content: flex-end;
          padding: 0;
        }
        .solve-exam .question-img {
          border: solid 1px #707070;
          background-color: #f2f2f2;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default connectStore(SolveExam);
